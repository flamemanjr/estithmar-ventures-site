import { useState } from "react";
import { CorporateButton } from "@/components/ui/corporate-button";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    country: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-gotham-bold text-foreground mb-8">Contact Us</h1>
            <p className="text-lg font-gotham text-muted-foreground leading-relaxed">
              For investment inquiries, partnerships, or media, please use the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-gotham-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border font-gotham text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent corporate-transition"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-gotham-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border font-gotham text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent corporate-transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-gotham-medium text-foreground mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border font-gotham text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent corporate-transition"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-gotham-medium text-foreground mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border font-gotham text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent corporate-transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-gotham-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border font-gotham text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent corporate-transition resize-none"
                  />
                </div>

                <CorporateButton type="submit" size="lg">
                  Send Inquiry
                </CorporateButton>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-gotham-bold text-foreground mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-gotham-medium text-foreground mb-2">Head Office</h4>
                    <p className="font-gotham text-muted-foreground">Doha, Qatar</p>
                  </div>
                  
                  <div>
                    <h4 className="font-gotham-medium text-foreground mb-2">General Inquiries</h4>
                    <a 
                      href="mailto:info@estithmarventures.com" 
                      className="font-gotham text-primary hover:underline"
                    >
                      info@estithmarventures.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-gotham-medium text-foreground mb-2">Investor Relations</h4>
                    <a 
                      href="mailto:ir@estithmarventures.com" 
                      className="font-gotham text-primary hover:underline"
                    >
                      ir@estithmarventures.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;