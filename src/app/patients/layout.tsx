import React from "react";
import Providers from "../providers/providers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AddDialogComorbidities } from "./_components/add-dialog-commorbidities";
import { AddDialogDisabilities } from "./_components/add-dialog-disabilities";

import PatientIcon from "@/components/ui/Icons/PatientIcon";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="">
    
      <div className=" top-20 sticky p-5 bg-gray-100/70">
        <div className="flex justify-end gap-5 ">
          <Link href="/patients/new">
            <Button variant="default" className="shadow-md ">
              <PatientIcon />
            </Button>
          </Link>

          <div>
            <AddDialogComorbidities />
          </div>
          <div>
            <AddDialogDisabilities />
          </div>
        </div>
      </div>

      <Providers>
        <div>{children}</div>
      </Providers>
    </div>
  );
};

export default Layout;
