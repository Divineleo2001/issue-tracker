import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import SignUp from "../sign-up/SignUp";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-20">
        <Tabs defaultValue="login" className="w-[500px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardContent className="">
                <Login />
              </CardContent>
              <CardFooter />
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card>
              <CardContent className="">
                <SignUp />
              </CardContent>
              <CardFooter />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
export default LoginPage;
