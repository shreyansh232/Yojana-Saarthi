import React from "react";
import { AreaGraph } from "@/components/charts/area-graph";
import { BarGraph } from "@/components/charts/bar-graph";
import { PieGraph } from "@/components/charts/pie-graph";
import PageContainer from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import PopularScheme from "@/components/PopularScheme";
import { Home, User, Target, PiggyBank } from "lucide-react";


export default function Dashboard() {
  return (
    <PageContainer scrollable={true}>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Overview</h2>
          </div>

          <div className="flex items-center">
            <Image
              src="/assets/location-icon.png"
              width={24}
              height={24}
              alt="Location"
            />
            <span className="ml-2 text-sm">
              Gautam Buddha Nagar, Uttar Pradesh
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            {
              title: "Access Points",
              value: "1,45,065",
              icon: <Home />, // {{ edit_1 }}
            },
            {
              title: "No. of Sukanya Accounts opened",
              value: "7,219",
              icon: <User />, // {{ edit_2 }}
            },
            {
              title: "Post offices with Core Banking Solutions",
              value: "2,265",
              icon: <Target />, // {{ edit_3 }}
            },
            {
              title: "No of Accounts Opened",
              value: "1,34,476",
              icon: <PiggyBank />, // {{ edit_4 }}
            },
          ].map((item, index) => (
            <Card key={index} className="border border-gray-300 shadow-sm">
              <CardContent className="flex items-center gap-5 p-3">
                {item.icon}
                <div>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="text-sm text-gray-500">{item.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="col-span-2 border border-gray-300 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Schemes Enrolled in Past 30 Days
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AreaGraph />
            </CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Annual Income by Age Group in Rural Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarGraph />
                </CardContent>
              </div>
              <div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Major Sources of Income in Indian Villages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PieGraph />
                </CardContent>
              </div>
            </div>
          </Card>
          <Card className="border border-gray-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Popular Schemes in your Area
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28087.956294934014!2d77.5117932465272!3d28.35901477739566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc75cd5f393d7%3A0xe6ae70064e15e731!2sSector%2017A%2C%20Gautam%20Buddha%20Nagar%2C%20Uttar%20Pradesh%20203201!5e0!3m2!1sen!2sin!4v1725485552912!5m2!1sen!2sin"
                  className="h-40 w-full"
                ></iframe>
              </div>
              <PopularScheme />
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
