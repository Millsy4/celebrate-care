import React from "react";
import BasicGallery from "../components/BasicGallery";

export default function Dashboard() {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <BasicGallery />
      <h1>Event Wishlist</h1>
      <BasicGallery />
      <h1>Event Ideas</h1>
      <BasicGallery />
    </div>
  );
}
