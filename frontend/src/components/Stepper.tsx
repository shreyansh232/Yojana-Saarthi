"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NagrikForm } from "@/components/NagrikForm";
import { ChevronRight, Loader2 } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const steps = ["Enter details", "Suggested Schemes"];
export interface Scheme {
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

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const { handleSubmit, watch } = useForm();
  const [schemeData, setSchemeData] = React.useState([]);
  const formValues = watch();

  const handleNext = () => {
    setIsLoading(true);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const fetchSchemes = async () => {
    const response = await axios.get("http://127.0.0.1:8000/schemes");
    setSchemeData(response?.data);
  }
    React.useEffect(() => {
        fetchSchemes();
    }, []);

  const handleReset = () => {
    setActiveStep(0);
    setIsLoading(false);
  };

  const isFormComplete = () => {
    return Object.values(formValues).every(
      (value) => value !== "" && value !== undefined,
    );
  };

  const BardLogoOverlay = () => (
    <Card className="flex h-screen w-full items-center justify-center">
      <Image
        src="/assets/Google_Bard_logo.svg"
        width={48}
        height={48}
        alt="Bard logo"
      />
      <span className="ml-2 text-2xl">...</span>
      <div className="absolute inset-0 bg-white opacity-50"></div>
    </Card>
  );

  const truncate = (input: string) => {
    if (input.length > 20) {
      return input.substring(0, 20) + "...";
    }
    return input;
  }
  const getPath = (index: number) => { 
    return `/scheme/${index}`; 
  };
  const mappedCards = schemeData.sort(() => Math.random() - 0.5).slice(0, 4).map((scheme: Scheme, index: number) => (

    <Link href={getPath(scheme?.schemeShortTitle)} >
    <Card className="w-full p-4 border border-orange-400 rounded-xl border-orange">
    <CardHeader className="p-0">
      <div className="flex items-center space-x-2">
        
        <Image src="/assets/documents.png" className="pt-4" width={50} height={50} alt={scheme.schemeName} />
        <h2 className="text-lg font-semibold text-left pl-1">{scheme.schemeName}</h2>
        <ChevronRight className="h-6 w-6" />
      </div>
    </CardHeader>
    <CardContent className="flex flex-end ml-8">
      <div className="flex flex-wrap gap-2 mt-2">
        {scheme.tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="px-3 py-1 text-sm border border-orange text-gray-800 rounded-full hover:bg-orange hover:text-white"
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
    <div className="w-full">
      {activeStep === steps.length ? (
        <div className="flex flex-row justify-between">
          <Button onClick={handleReset} className="bg-red-500">
            Reset
          </Button>
        </div>
      ) : (
        <div>
          {activeStep === 0 && (
            <div className="">
              <NagrikForm />
            </div>
          )}
          {activeStep === 1 && (
            <div className="mt-3 flex flex-col gap-3">
              <h2 className="mb-3 text-2xl">Suggested Schemes</h2>
              {isLoading ? <BardLogoOverlay /> : mappedCards}
            </div>
          )}

          {activeStep === 0 && (
            <div className="mt-5 flex flex-row justify-end">
              <Button
                onClick={handleNext}
                className="h-10 w-full text-lg"
                variant="button"
                disabled={!isFormComplete() || isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </div>
                ) : (
                  "Generate Schemes"
                )}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
