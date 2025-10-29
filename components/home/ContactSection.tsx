"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const ContactSection = () => {
	return (
		<section
			id="contact"
			className="py-20 bg-linear-to-b from-slate-900 to-slate-800"
		>
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Let&apos;s Work Together
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						Ready to bring your ideas to life? Get in touch and let&apos;s
						discuss your next project.
					</p>
				</div>

				<div className="max-w-6xl flex items-center justify-center mx-auto">
					<div>
						<Card className="bg-slate-800/50 border-slate-700 h-full">
							<CardHeader>
								<CardTitle className="text-white text-xl">
									Get In Touch
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="flex items-center gap-4">
									<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
										<Mail className="w-5 h-5 text-white" />
									</div>
									<div>
										<p className="text-gray-400 text-sm">Email</p>
										<p className="text-white">peterdinis611@gmail.com</p>
									</div>
								</div>

								<div className="flex items-center gap-4">
									<div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
										<Phone className="w-5 h-5 text-white" />
									</div>
									<div>
										<p className="text-gray-400 text-sm">Phone</p>
										<p className="text-white">+421 950 460 254</p>
									</div>
								</div>

								<div className="flex items-center gap-4">
									<div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
										<MapPin className="w-5 h-5 text-white" />
									</div>
									<div>
										<p className="text-gray-400 text-sm">Location</p>
										<p className="text-white">Prague</p>
									</div>
								</div>

								<div className="pt-6 border-t border-slate-700">
									<p className="text-gray-400 text-sm mb-4">Follow me on</p>
									<div className="flex gap-4">
										<Link
											href="https://github.com/peterdinis"
											className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors"
										>
											<Github className="w-5 h-5 text-white" />
										</Link>
										<Link
											href="https://www.linkedin.com/in/peter-dinis-58520b214/"
											className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors"
										>
											<Linkedin className="w-5 h-5 text-white" />
										</Link>
										<Link
											href="https://www.facebook.com/peto.dinis/"
											className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors"
										>
											<Facebook className="w-5 h-5 text-white" />
										</Link>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};
