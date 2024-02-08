"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <div>
      <Link href="/issues/new">
        <Button variant="default" className="ml-10 mt-10">
          New Issue
        </Button>
      </Link>
    </div>
  );
};

export default IssuesPage;
