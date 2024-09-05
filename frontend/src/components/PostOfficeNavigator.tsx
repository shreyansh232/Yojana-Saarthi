"use client"

import { useTranslation } from "react-i18next";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { MapPin } from "lucide-react";

export default function PostOfficeNavigator() {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-full">
      <div className="mx-auto max-w-7xl p-10">
        <h1
          className="mb-16 text-center text-5xl font-bold text-[#EB5E28]"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}
        >
          {t("find_post_office_near_you")}
        </h1>
        <div className="flex justify-between">
          <Card className="border-none drop-shadow-none">
            <CardContent>
              <div className="overflow-hidden rounded-[20px] border-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28087.956294934014!2d77.5117932465272!3d28.35901477739566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc75cd5f393d7%3A0xe6ae70064e15e731!2sSector%2017A%2C%20Gautam%20Buddha%20Nagar%2C%20Uttar%20Pradesh%20203201!5e0!3m2!1sen!2sin!4v1725485552912!5m2!1sen!2sin"
                  className="h-[450px] w-[600px] border-0"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-7 h-full w-2/5">
            <CardHeader>
              <CardTitle className="text-3xl">{t("enter_your_location")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="location" className="text-lg">
                  {t("location")}
                  </Label>
                  <Input id="location" placeholder="Gautam Buddh Nagar" />
                </div>
              </form>
              <Button variant="button" className="mt-3 w-full">
              {t("find_post_office")}
              </Button>
            </CardContent>
            <CardFooter className="pt-5">
              <p>{t("nearby_post_offices")} </p>
              <ul>
                <li className="flex gap-1 pt-1">
                  <MapPin />
                  <p>{t("india_post_office_1")}</p>
                </li>
                <li className="flex gap-1 pt-1">
                  <MapPin />
                  <p>{t("india_post_office_1")}</p>
                </li>
                <li className="flex gap-1 pt-1">
                  <MapPin />
                  <p>{t("india_post_office_1")}</p>
                </li>
              </ul>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
