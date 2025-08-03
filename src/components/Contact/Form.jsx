import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, User, MessageSquare, Send } from "lucide-react";

export default function ContactForm() {
  const handleSubmit = () => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
    // You might want to add a success message or clear the form
  };

  return (
    <section className="py-20 px-6 md:px-10 lg:px-16 bg-gradient-to-br from-[#3b4b5f] via-[#1e293b] to-[#0b1320]">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white/5 border border-gray-700 text-white backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-lg mb-3">
              Get in Touch
            </CardTitle>
            <CardDescription className="text-gray-400 text-lg max-w-xl mx-auto">
              Have questions, collaboration ideas, or just want to say hello?
              We'd love to hear from you!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="pl-10 bg-white/10 border border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="pl-10 bg-white/10 border border-gray-600 text-white placeholder:text-gray-500 focus:border-pink-500 focus:ring-pink-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    className="pl-10 bg-white/10 border border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  rows={6}
                  className="bg-white/10 border border-gray-600 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500 resize-y"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
