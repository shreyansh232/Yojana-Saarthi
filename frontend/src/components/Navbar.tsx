"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";
import i18next from "i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = async (language: string) => {
    console.log(language);
    try {
      await i18next.changeLanguage(language);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-lg">
      <NavigationMenu className="bg-[#252422] p-5 text-white">
        <NavigationMenuList className="w-screen">
          <div className="mx-10 flex w-screen items-center justify-between text-3xl">
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <Image
                  src={"/assets/yojana-logo.png"}
                  width={120}
                  height={120}
                  alt="logo"
                />
              </Link>
            </NavigationMenuItem>
            <div className="flex items-center gap-3 text-xl">
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t("schemes")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t("contact")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Select onValueChange={handleLanguageChange}>
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder={t("language")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="en">{t("english")}</SelectItem>
                      <SelectItem value="hi">{t("hindi")}</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </NavigationMenuItem>
              <Link href={"/dashboard"}>
                <NavigationMenuItem>
                  <Button variant="button" className="px-10 py-3">
                    {t("login")}
                  </Button>
                </NavigationMenuItem>
              </Link>
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
