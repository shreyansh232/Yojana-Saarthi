"use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "next/navigation";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//   return (
//     <div className="mx-20">
//       <div className="container mx-auto p-4">
//         <h1 className="mb-4 text-2xl font-bold">{schemeData.schemeName}</h1>
//         <p className="mb-4 text-gray-600">{schemeData.beneficiaryState}</p>

//         <div className="mb-4 flex flex-wrap gap-2">
//           {schemeData.tags &&
//             schemeData.tags.map((tag, index) => (
//               <Badge key={index} variant="outline" className="border-orange">
//                 {tag}
//               </Badge>
//             ))}
//         </div>

//         <Card className="mb-6">
//           <CardHeader>
//             <CardTitle>Scheme Category</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>{schemeData.schemeCategory}</p>
//           </CardContent>
//         </Card>

//         <Card className="mb-6">
//           <CardHeader>
//             <CardTitle>Details</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>{schemeData.briefDescription}</p>
//           </CardContent>
//         </Card>

//         <Card className="mb-6">
//           <CardHeader>
//             <CardTitle>Benefits</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="list-disc pl-5">
//               <li>
//                 Under the scheme, financial assistance of ₹20,000/- will be
//                 provided as one-time assistance to the eligible beneficiary.
//               </li>
//             </ul>
//             <p className="mt-2 font-semibold">
//               Note: The amount will be transferred to the respective applicant's
//               bank account.
//             </p>
//           </CardContent>
//         </Card>
//         <Card className="mb-6">
//           <CardHeader>
//             <CardTitle>Application Process</CardTitle>
//           </CardHeader>
//           <CardContent>

//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Scheme } from "@/components/Stepper";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Info, AlertCircle } from "lucide-react";

export default function SchemePage() {
  const { schemeId } = useParams();
  const [schemeData, setSchemeData] = useState<Scheme | null>(null);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/schemes/${schemeId}`,
        );
        setSchemeData(response.data);
      } catch (error) {
        console.error("Error fetching scheme data:", error);
      }
    };

    fetchSchemes();
  }, [schemeId]);

  if (!schemeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto max-w-4xl p-4 pt-12">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">{schemeData.schemeName}</h1>
        <p className="mb-4 text-gray-600">{schemeData.beneficiaryState}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {schemeData.tags &&
            schemeData.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="border-orange">
                {tag}
              </Badge>
            ))}
        </div>
      </header>

      <Separator className="my-8" />

      <section className="mb-8">
        <h2 className="mb-4 flex items-center text-2xl font-semibold">
          <Info className="mr-2" /> Scheme Details
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-700">{schemeData.briefDescription}</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 flex items-center text-2xl font-semibold">
          <CheckCircle className="mr-2" /> Benefits
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Under the scheme, financial assistance of ₹20,000/- will be
                provided as one-time assistance to the eligible beneficiary.
              </li>
            </ul>
            <p className="mt-4 rounded-md border border-orange  p-4 text-black">
              <strong>Note:</strong> The amount will be transferred to the
              respective applicant's bank account.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 flex items-center text-2xl font-semibold">
          <AlertCircle className="mr-2" /> Eligibility Criteria
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal space-y-2 pl-5 text-gray-700">
              <li>
                The applicant should be a native and resident of Kerala State.
              </li>
              <li>
                The applicant must be either the person who has been seriously
                injured in a crime or must be a dependent -
                Wife/Husband/Unmarried son or daughter of the victim of the
                crime.
              </li>
              <li>
                The annual income of the family should not exceed ₹1,00,000/-.
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Application Process</h2>
        <Card>
          <CardContent className="pt-6">
            <Tabs defaultValue="online">
              <TabsList className="bg-wheat drop-shadow-none">
                <TabsTrigger value="online">Online</TabsTrigger>
                <TabsTrigger value="offline">Offline</TabsTrigger>
              </TabsList>
              <TabsContent value="online">
                <h3 className="mb-2 font-semibold">Registration Process:</h3>
                <ol className="mb-4 list-decimal pl-5">
                  <li>
                    To avail of the benefits of the scheme, the applicant needs
                    to visit SUNEETHI- Online Service Application Portal
                  </li>
                  <li>On the home page, click on "One time Registration"</li>
                  <li>
                    Fill in the details like Name, Email ID & Mobile Number and
                    click on 'Register'.
                  </li>
                  <li>
                    The applicant needs to enter the verification code received
                    on the mobile number and click on 'Verify'.
                  </li>
                  <li>
                    Now, a form will open to create the new profile, fill in all
                    the mandatory details and click on 'Register'.
                  </li>
                </ol>
                <h3 className="mb-2 font-semibold">
                  Login/Application Process:
                </h3>
                <ol className="list-decimal pl-5">
                  <li>
                    Once the registration process is completed, the applicant
                    should visit SUNEETHI- Online Service Application Portal and
                    click on "Citizen Login".
                  </li>
                  <li>
                    Enter the user name i.e. Mobile Number and Password and
                    click on "Sign in".
                  </li>
                  <li>
                    Now, the applicant needs to update all their details i.e.
                    Personal Information, Contact Details, Identity Cards & Bank
                    Details by clicking on the 'Edit' button.
                  </li>
                  <li>
                    Once the applicant updated their profile successfully, the
                    schemes will appear on the left side of the screen.
                  </li>
                  <li>
                    Select the scheme and click on the "Apply Now" button.
                  </li>
                  <li>
                    Fill in all the mandatory details in the application form
                    and click on the 'Submit' button
                  </li>
                </ol>
              </TabsContent>
              <TabsContent value="offline">
                <ol className="list-decimal pl-5">
                  <li>
                    To avail of the benefits of the scheme, the applicant needs
                    to visit the official website of the Social Justice
                    Department, Government of Kerala to download the application
                    form.
                  </li>
                  <li>
                    The applicant needs to fill out the application form
                    completely.
                  </li>
                  <li>
                    The duly filled application along with supporting documents
                    has to be submitted to the District Probation Office
                    concerned.
                  </li>
                </ol>
                <p>
                  Note: The applicant should have applied within 5 years of the
                  crime.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
