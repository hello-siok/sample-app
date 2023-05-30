import React from "react";
import { HeroBanner } from "src/components/hero-banner";
import { PageLayout } from "../components/page-layout";

export const HomePage: React.FC = () => (
  <PageLayout>
    <>
      <HeroBanner />
    </>
  </PageLayout>
);
