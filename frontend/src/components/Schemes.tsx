"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useTranslation } from "react-i18next";
import { HandCoins } from "lucide-react";
import { HousePlus } from "lucide-react";
import { Shield } from "lucide-react";
import { Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Schemes() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#252422]">
      <div className="mx-auto max-w-6xl p-20">
        <h1
          className="mb-24 text-center text-6xl font-bold text-[#EB5E28]"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}
        >
          {t("find_schemes")}
        </h1>
        <div className="grid grid-cols-2 gap-8 text-center">
          <Card className="border-orange bg-wheat">
            <CardHeader className="">
              <HandCoins
                className="mb-4 flex w-full justify-center"
                size={45}
              />
              <CardTitle className="pb-2 text-2xl">
                {t("post_office_savings")}
              </CardTitle>
              <CardDescription>{t("post_office_savings_desc")}</CardDescription>
            </CardHeader>
          </Card>

        <Card className="border-orange bg-wheat">
            <CardHeader>
              <Warehouse
                className="color-white mb-4 flex w-full justify-center"
                size={45}
              />
              <CardTitle className="pb-2 text-2xl">
                {t("rural_postal_insurance")}
              </CardTitle>
              <CardDescription>
                {t("rural_postal_insurance_desc")}
              </CardDescription>
            </CardHeader>
          </Card>

        <Card className="border-orange bg-wheat">
            <CardHeader>
              <HousePlus
                className="mb-4 flex w-full justify-center"
                size={45}
              />
              <CardTitle className="pb-2 text-2xl">
                {t("postal_life_insurance")}
              </CardTitle>
              <CardDescription>
                {t("postal_life_insurance_desc")}
              </CardDescription>
            </CardHeader>
          </Card>

        <Card className="border-orange bg-wheat">
            <CardHeader>
              <Shield className="mb-4 flex w-full justify-center" size={45} />
              <CardTitle className="pb-2 text-2xl">
                {t("jansuraksha_scheme")}
              </CardTitle>
              <CardDescription>{t("jansuraksha_scheme_desc")}</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="m-7 flex justify-center">
          <Button variant="button" className="text-md w-1/6 p-6">
            {t("explore_more")}
          </Button>
        </div>
      </div>
    </div>
  );
}
