import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "srmanda.cs@gmail.com",
      href: "mailto:srmanda.cs@gmail.com",
      primary: true
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (919) 672-2226",
      href: "tel:+19196722226"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "United States",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/srmanda-cs",
      color: "text-blue-500"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/srmanda-cs",
      color: "text-gray-300"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm currently pursuing my MS at UNC Chapel Hill and actively seeking 
            opportunities to contribute to innovative projects and teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gradient text-center lg:text-left">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className={`p-3 rounded-lg ${contact.primary ? 'bg-primary/20 text-primary' : 'bg-secondary text-secondary-foreground'} group-hover:scale-110 transition-transform`}>
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href !== "#" ? (
                        <a 
                          href={contact.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      size="sm"
                      asChild
                      className="group hover:scale-105"
                    >
                      <a 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <span className={social.color}>
                          {social.icon}
                        </span>
                        {social.label}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Availability & Status */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gradient text-center lg:text-left">Current Status</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <Badge variant="default" className="text-xs">Available</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently open to new opportunities and exciting projects
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Education</h4>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-primary">University of North Carolina at Chapel Hill</p>
                    <p>MS in Computer Science</p>
                    <p>Aug 2024 – May 2026 | GPA: 4.0</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Full-Stack Development",
                      "Cloud Architecture", 
                      "Machine Learning",
                      "System Optimization",
                      "DevOps"
                    ].map((interest, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    variant="gradient" 
                    className="w-full" 
                    asChild
                  >
                    <a href="mailto:srmanda.cs@gmail.com">
                      <Mail className="w-4 h-4" />
                      Send Message
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;