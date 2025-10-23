import { GraduationCap, MapPin, Calendar, Award, School, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Correct imports for Vite (without /public/ in the path)
import courseImg from '/course.jpg';
import hackImg from '/Hack2skill.png';
import buildImg from '/buildwithindia.png';
import internImg from '/internship.jpg';
import mysticodeImg from '/mysticode.jpg';
import outskillImg from '/outskill.jpg';

const About = () => {
  return (
    <>
      {/* Existing About Section */}
      <section id="about" className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* Full Width Column - Personal Info */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I am a passionate MCA student with hands-on experience in data science and machine learning. 
                  I enjoy turning complex data into actionable insights through predictive modeling and analytics. 
                  I have worked with Python, machine learning frameworks, and data visualization tools to solve 
                  real-world problems. I am enthusiastic about leveraging my skills to contribute to innovative 
                  data-driven solutions and keen to keep learning in this exciting field.
                </p>
              </div>
            </div>
          </div>

          {/* Education Cards Grid - 2x2 Layout */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Master's Degree Card */}
            <Card className="glass-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Master of Computer Applications (MCA)
                    </h3>
                    <p className="text-sm text-foreground/60 mb-3">
                       PES University, Bengaluru
                    </p>
                    <p className="text-foreground/70 mb-2">Currently Pursuing • 2024 - 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bachelor's Degree Card */}
            <Card className="glass-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <p className="text-sm text-foreground/60 mb-3">
                       Christ Academy Institute for Advanced Studies, Bengaluru
                    </p>
                    <p className="text-foreground/70 mb-2">Completed • 2021 - 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Higher Secondary Card */}
            <Card className="glass-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <School className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Higher Secondary Education (12th Grade)
                    </h3>
                    <p className="text-sm text-foreground/60 mb-3">
                      Pupil Tree College, Bellary
                     </p>
                    <p className="text-foreground/70 mb-2">Completed • 2019 - 2021</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secondary School Card */}
            <Card className="glass-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <School className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Secondary School Education (10th Grade)
                    </h3>
                    <p className="text-sm text-foreground/60 mb-3">
                       St Dominic's School, Attibele
                    </p>
                    <p className="text-foreground/70 mb-2">Completed • 2018 - 2019</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Certifications & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications and recognitions that showcase my expertise and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data Analyst Program */}
            <Card className="glass-card border-0 shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img 
                  src={courseImg} 
                  alt="Data Analyst Program Certificate" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-primary font-medium">September 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Data Analyst Program - Odin School
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Completed structured training program covering data analysis, statistical methods, and visualization tools.
                </p>
              </CardContent>
            </Card>

            {/* Hack2skill Certificate */}
            <Card className="glass-card border-0 shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-green-500/10">
                <img 
                  src={hackImg} 
                  alt="Hack2skill Certificate" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm text-accent font-medium">Certificate of Participation</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Hack2skill Certificate
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Certificate of participation in technical skills development program focused on enhancing programming and problem-solving abilities.
                </p>
              </CardContent>
            </Card>

            {/* mysticode Certificate */}
            <Card className="glass-card border-0 shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-green-500/10">
                <img 
                  src={mysticodeImg} 
                  alt="mysticode Certificate" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm text-accent font-medium">Certificate of Participation</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Mysticode Certificate
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">  
                  Participated in a 24-hour application development hackathon as team MYSTICODE, presenting the project "WellSync" at PES University.
                </p>
              </CardContent>
            </Card>
            
            {/* Outskill Certificate */}
            <Card className="glass-card border-0 shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-green-500/10">
                <img 
                  src={outskillImg} 
                  alt="Outskill Certificate" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm text-accent font-medium">Certificate of Participation</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Outskill Certificate
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Completed the Generative AI Mastermind program, demonstrating applied proficiency in contemporary generative AI workflows.
                </p>
              </CardContent>
            </Card>

            {/* Build With India Hackathon */}
            <Card className="glass-card border-0 shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-orange-500/10 to-red-500/10">
                <img 
                  src={buildImg} 
                  alt="Build With India Hackathon Certificate" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-orange-500" />
                  <span className="text-sm text-orange-500 font-medium">Top 5,000 Teams</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Build With India - Hackathon
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Recognized among the top 5,000 teams out of 25,000 in the national-level Build With India Hackathon (Finale at Google Office).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
