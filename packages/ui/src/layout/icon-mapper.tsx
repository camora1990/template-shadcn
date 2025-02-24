import * as Icons from "lucide-react";

import { LucideIcon } from "lucide-react";

interface IconMapperProps {
  icon: string;
  classname?: string;
}

export const IconMapper = ({ icon, classname }: IconMapperProps) => {
  let Component = Icons.BadgeInfo;
  if (icon && icon in Icons) {
    Component = Icons[icon as keyof typeof Icons] as LucideIcon;
  }
  return <Component className={classname} />;
};
