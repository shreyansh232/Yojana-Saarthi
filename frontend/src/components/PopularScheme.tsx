"use client"
import React from "react";
import axios from "axios";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

interface Scheme {
  beneficiaryState: string;
  schemeShortTitle: string;
  level: string;
  nodalMinistryName: string;
  schemeCategory: string;
  schemeName: string;
  schemeCloseDate: string;
  briefDescription: string;
  age_range: string;
  tags: string[];
}
const PopularScheme = () => {
  const [schemeData, setSchemeData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const SkeletonCard = () => (
    <Card className="h-20 w-full rounded-[20px] bg-white shadow-xl">
      <CardHeader>
        <Skeleton className="h-6 w-2/3" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-4/5" />
      </CardContent>
    </Card>
  );
  const fetchSchemes = async () => {
    const response = await axios.get("http://127.0.0.1:8000/schemes");
    setSchemeData(response?.data);
  };
  React.useEffect(() => {
    fetchSchemes();
  }, []);

  const truncate = (input: string) => {
    if (input.length > 20) {
      return input.substring(0, 20) + "...";
    }
    return input;
  };
  const getPath = (index: number) => {
    return `/scheme/${index}`;
  };

  const mappedCards = schemeData
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map((scheme: Scheme, index: number) => (
      <Link href={getPath(scheme?.schemeShortTitle)} key={index}>
        <Card className="border-orange w-full rounded-[30px] border p-4">
          <CardHeader className="p-0">
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/documents.png"
                className="pt-4"
                width={50}
                height={50}
                alt={scheme.schemeName}
              />
              <h2 className="pl-1 text-left text-lg font-semibold">
                {scheme.schemeName}
              </h2>
              <ChevronRight className="h-6 w-6" />
            </div>
          </CardHeader>
          <CardContent className="flex-end ml-8 flex">
            <div className="mt-2 flex flex-wrap gap-2">
              {scheme.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="border-orange hover:bg-orange rounded-full border px-3 py-1 text-sm text-gray-800 hover:text-white"
                >
                  {truncate(tag)}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    ));
  return (
    <div className="max-w-3xl">
      {" "}
      <div className="mt-3 flex flex-col gap-3">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : mappedCards}
      </div>
    </div>
  );
};

export default PopularScheme;
