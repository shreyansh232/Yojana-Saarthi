import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { HandCoins } from "lucide-react";
import { HousePlus } from "lucide-react";
import { Shield } from "lucide-react";
import { Warehouse } from "lucide-react";
import { Button } from "./button";

export default function Schemes() {
  return (
    <div className="mx-auto max-w-6xl p-20">
      <h1
        className="text-center text-6xl font-bold text-[#EB5E28]"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}
      >
        Find suitable schemes
      </h1>
      <div className="grid grid-cols-2 gap-8 text-center">
        <Card>
          <CardHeader className="">
            <HandCoins className="mb-4 flex w-full justify-center" size={45} />
            <CardTitle className="pb-2 text-2xl">
              Post Office Savings Scheme
            </CardTitle>
            <CardDescription>
              Known for their safety, guaranteed returns, and tax benefits. They
              are known for their safety, guaranteed returns, and tax benefits.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Warehouse
              className="color-white mb-4 flex w-full justify-center"
              size={45}
            />
            <CardTitle className="pb-2 text-2xl">
              Rural Postal Life Insurance Schemes
            </CardTitle>
            <CardDescription>
              RPLI aims to extend insurance coverage to the rural population at
              affordable premiums, ensuring that even those with modest incomes
              can secure their future and that of their families
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <HousePlus className="mb-4 flex w-full justify-center" size={45} />
            <CardTitle className="pb-2 text-2xl">
              Postal Life insurance Schemes
            </CardTitle>
            <CardDescription>
              PLI covers employees of the Central and State Governments, Public
              Sector Undertakings, universities, government-aided educational
              institutions, and more
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="mb-4 flex w-full justify-center" size={45} />
            <CardTitle className="pb-2 text-2xl">Jansurakhsha Scheme</CardTitle>
            <CardDescription>
              The Jansuraksha Schemes are a set of social security schemes
              launched by the Government of India aimed at providing affordable
              insurance and pension coverage to the underprivileged and
              economically weaker sections of society
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="m-7 flex justify-center">
        <Button variant="button" className="text-md w-1/6 p-6">
          Explore more
        </Button>
      </div>
    </div>
  );
}
