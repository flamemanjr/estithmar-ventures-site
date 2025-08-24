const teamMembers = [
  {
    name: "Ahmed Al-Mansouri",
    title: "Chief Executive Officer",
    bio: "Global hospitality executive with 20+ years developing luxury destinations across the Middle East and Asia. Led major resort openings and brand partnerships."
  },
  {
    name: "Sarah Davidson",
    title: "Chief Operating Officer",
    bio: "Operations specialist focused on guest experience excellence and operational efficiency. Former regional director at leading international hotel groups."
  },
  {
    name: "Michael Chen",
    title: "Chief Development Officer", 
    bio: "Project development expert with expertise in mixed-use hospitality developments. Track record of delivering complex projects on time and on budget."
  },
  {
    name: "Fatima Al-Zahra",
    title: "Chief Financial Officer",
    bio: "Finance leader with deep experience in hospitality investment and development financing. Specialist in stakeholder relations and capital deployment."
  },
  {
    name: "James Mitchell",
    title: "Chief Marketing Officer",
    bio: "Brand strategist and marketing executive with luxury hospitality expertise. Focus on digital transformation and guest acquisition strategies."
  },
  {
    name: "Laila Kassem",
    title: "Head of Strategy",
    bio: "Strategic planning and business development professional with consulting background. Leads market analysis and growth initiatives across markets."
  }
];

const Team = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-gotham-bold text-foreground mb-8">Leadership</h1>
            <p className="text-lg font-gotham text-muted-foreground leading-relaxed">
              Our executive team combines international experience with on-the-ground execution discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-card border border-border p-8">
                <div className="w-24 h-24 bg-muted mb-6 mx-auto"></div>
                <h3 className="text-xl font-gotham-bold text-foreground mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-sm font-gotham-medium text-primary mb-4 text-center">
                  {member.title}
                </p>
                <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;