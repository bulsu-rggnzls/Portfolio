import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist/build/pdf.min.mjs";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

/**
 * Renders the first page of a certificate PDF as a real image so the preview
 * fills the card area cleanly (no browser PDF viewer chrome or gray gutters).
 *
 * Reports the page's pixel dimensions via `onReady` once rendered, so a parent
 * can size its frame to the page's true aspect ratio.
 */
export default function PdfPage({ src, alt, className, onReady }) {
  const [imgSrc, setImgSrc] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const pdf = await pdfjsLib.getDocument(src).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const context = canvas.getContext("2d");
        if (!context) throw new Error("Canvas 2D context unavailable");

        await page.render({
          canvasContext: context,
          canvas,
          viewport,
        }).promise;

        if (cancelled) return;
        setImgSrc(canvas.toDataURL("image/png"));
        onReady?.({ width: viewport.width, height: viewport.height });
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    render();

    return () => {
      cancelled = true;
    };
    // onReady is expected to be a stable callback (e.g. a setState dispatch).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  if (failed) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 bg-slate-900/40">
        <FileText size={36} className="text-emerald-400/50" />
        <span className="text-xs text-slate-500">Certificate Preview</span>
      </div>
    );
  }

  if (!imgSrc) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 bg-slate-900/40">
        <FileText size={36} className="text-emerald-400/50 animate-pulse" />
        <span className="text-xs text-slate-500">Loading preview…</span>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      draggable={false}
    />
  );
}
