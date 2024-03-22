"use client";
import DiscoverBanner from "@/Components/DiscoverBanner";
import FilterRow from "@/Components/FilterRow";
import Header from "@/Components/Header";
import HeaderBanner from "@/Components/HeaderBanner";
import ShoppingList from "@/Components/ShoppingList";

export default function Home() {
  return (
    <main>
      <HeaderBanner />
      <Header />
      <DiscoverBanner />
      <FilterRow />
      <ShoppingList />
    </main>
  );
}
