"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NagrikForm } from "@/components/NagrikForm";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const steps = ["Enter details", "Suggested Schemes"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const { handleSubmit, watch } = useForm();
  const formValues = watch();
  const handleNext = () => {
    setIsLoading(true);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsLoading(false);
  };

  const isFormComplete = () => {
    return Object.values(formValues).every(
      (value) => value !== "" && value !== undefined,
    );
  };

  const SkeletonCard = () => (
    <Card className="h-36 w-full">
      <CardHeader>
        <Skeleton className="h-6 w-2/3" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-4/5" />
      </CardContent>
    </Card>
  );

  const getPath = (index: number) => { 
    return `/scheme/${index + 1}`; 
  };

  const mappedCards = Array.from({ length: 5 }).map((_, index) => (
    <Link href={getPath(index)}>
      <Card key={index} className="h-36 w-full">
        <CardHeader>
          <CardTitle>Scheme {index + 1}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Details about scheme {index + 1} go here.</p>
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
              {isLoading
                ? Array.from({ length: 5 }).map((_, index) => (
                    <SkeletonCard key={index} />
                  ))
                : mappedCards}
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
