"use client";
import React from "react";
import { useState } from "react";
import { getSuggestions } from "@/app/lib/actions";
import { Person } from "@/app/lib/interfaces";
import SubscribeSuggestion from "./suggestion/SubscribeSuggestion";

interface SuggestionsProps {
  variant: "expanded" | "collapsed";
}

export default function Suggestions(props: SuggestionsProps) {
  const subscribeSuggestions = getSuggestions();

  return (
    <div className="flex flex-col gap-1 p-1">
      {subscribeSuggestions.map((person, index) => {
        return (
          <SubscribeSuggestion
            key={index}
            variant={props.variant}
            person={person}
          />
        );
      })}
    </div>
  );
}
