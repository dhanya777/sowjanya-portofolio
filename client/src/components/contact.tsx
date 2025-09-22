import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Mail, Phone, Linkedin, Github, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again or use direct email contact.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const directContacts = [
    {
      title: "Email",
      value: "sowjanya.vangalapudi@email.com",
      link: "mailto:sowjanya.vangalapudi@email.com",
      linkText: "Send Email",
      icon: Mail,
      color: "primary",
    },
    {
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXX",
      linkText: "Call Now",
      icon: Phone,
      color: "accent",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/sowjanya-vangalapudi",
      link: "https://linkedin.com/in/sowjanya-vangalapudi",
      linkText: "Connect on LinkedIn",
      icon: Linkedin,
      color: "primary",
    },
  ];

  const socialNetworks = [
    { icon: Linkedin, href: "https://linkedin.com/in/sowjanya-vangalapudi", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/sowjanya", label: "Twitter" },
    { icon: Github, href: "https://github.com/sowjanya", label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted" data-testid="contact-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-subtitle">
            Ready to discuss your QA needs? Let's connect and explore how we can elevate your software quality together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card data-testid="card-contact-form">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-contact-form-title">
                Send a Message
              </h3>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    {...form.register("name")}
                    className="w-full"
                    data-testid="input-name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-name">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...form.register("email")}
                    className="w-full"
                    data-testid="input-email"
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-email">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    {...form.register("subject")}
                    className="w-full"
                    data-testid="input-subject"
                  />
                  {form.formState.errors.subject && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-subject">
                      {form.formState.errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project or requirements..."
                    {...form.register("message")}
                    className="w-full resize-none"
                    data-testid="textarea-message"
                  />
                  {form.formState.errors.message && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-message">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  data-testid="button-send-message"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card data-testid="card-direct-contact">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-direct-contact-title">
                  Direct Contact
                </h3>
                <div className="space-y-6">
                  {directContacts.map((contact, index) => (
                    <div key={index} className="flex items-start" data-testid={`contact-item-${index}`}>
                      <div className={`w-12 h-12 ${contact.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                        <contact.icon className={`w-5 h-5 ${contact.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground" data-testid={`text-contact-title-${index}`}>
                          {contact.title}
                        </h4>
                        <p className="text-muted-foreground" data-testid={`text-contact-value-${index}`}>
                          {contact.value}
                        </p>
                        <a
                          href={contact.link}
                          className="text-primary hover:text-primary/80 transition-colors"
                          data-testid={`link-contact-${index}`}
                        >
                          {contact.linkText}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-social-networks">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-social-title">
                  Professional Networks
                </h3>
                <div className="flex space-x-4">
                  {socialNetworks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${index === 0 ? 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground' : index === 1 ? 'bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground' : 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground'} rounded-lg flex items-center justify-center transition-all duration-200`}
                      aria-label={social.label}
                      data-testid={`link-social-${index}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
