import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { reviews } from "./reviews";
const Reviews = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 md:py-16 px-4 overflow-hidden">
			<div className="max-w-7xl mx-auto mb-8 md:mb-12 text-center">
				<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
					Patients Reviews
				</h1>
				<p className="text-lg md:text-xl text-gray-600 mb-2">
					Don't just take our word for it
				</p>
			</div>
      <script src="https://elfsightcdn.com/platform.js" async></script>
			<div
				class="elfsight-app-020dc655-aa89-4b9a-a1d6-33c7247c0b60"
				data-elfsight-app-lazy
			></div>
		</div>
	);
};

export default Reviews;

//https://dash.elfsight.com/
//Use Elfsight for reviews widget