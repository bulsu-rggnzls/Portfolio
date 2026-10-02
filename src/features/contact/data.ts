import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "rggonzales.work@gmail.com",
    href: "mailto:rggonzales.work@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bocaue, Bulacan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "09466836962",
    href: "tel:09466836962",
  },
];
