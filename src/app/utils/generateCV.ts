import jsPDF from 'jspdf';

export const generateCV = () => {
  const doc = new jsPDF();
  
  // Set font
  doc.setFont('helvetica');
  
  // Header
  doc.setFontSize(24);
  doc.setTextColor(249, 115, 22); // Orange color
  doc.text('CHANDAN KUMAR', 105, 20, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('DevOps Engineer', 105, 28, { align: 'center' });
  
  // Contact Info
  doc.setFontSize(10);
  doc.text('Email: chndnkumar666@gmail.com | Phone: +91-9934457318', 105, 35, { align: 'center' });
  doc.text('LinkedIn: linkedin.com/in/chandan-kumar-6395a8189 | GitHub: github.com/chandan0312', 105, 40, { align: 'center' });
  
  // Line
  doc.setDrawColor(249, 115, 22);
  doc.setLineWidth(0.5);
  doc.line(20, 45, 190, 45);
  
  // Summary
  doc.setFontSize(14);
  doc.setTextColor(249, 115, 22);
  doc.text('PROFESSIONAL SUMMARY', 20, 55);
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const summary = 'Strong, skilled DevOps engineer with 4.8+ years of experience developing applications via automated pipelines in various environments. Deep expertise in Docker, Kubernetes, Azure, and AWS cloud platforms.';
  doc.text(summary, 20, 62, { maxWidth: 170 });
  
  // Experience
  doc.setFontSize(14);
  doc.setTextColor(249, 115, 22);
  doc.text('WORK EXPERIENCE', 20, 80);
  
  // Job 1
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.text('Systems Engineer', 20, 88);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('Tata Consultancy Services (TCS) | JAN 2021 - Present', 20, 93);
  doc.text('• Working with Docker and Kubernetes for containerization and orchestration', 20, 99);
  doc.text('• Building end-to-end CI/CD pipelines using Jenkins, GitLab, Azure, and GitHub Actions', 20, 104);
  doc.text('• Managing technical debt projects with focus on containerization', 20, 109);
  
  // Job 2
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('DevOps/Support/Developer', 20, 118);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('Acchanz System Pvt. Ltd | FEB 2021 - NOV/DEC 2022', 20, 123);
  doc.text('• Used DevOps tools like Jenkins, GitLab, Azure, AWS, and GitHub', 20, 129);
  doc.text('• Infrastructure automation using Terraform and Ansible', 20, 134);
  doc.text('• Application migration and containerization', 20, 139);
  
  // Skills
  doc.setFontSize(14);
  doc.setTextColor(249, 115, 22);
  doc.text('TECHNICAL SKILLS', 20, 152);
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('DevOps & CI/CD: Jenkins, Git/GitHub/GitLab, Azure Release Pipeline, GitHub Actions', 20, 159);
  doc.text('Containerization: Docker, Kubernetes, Container Registry, Helm', 20, 164);
  doc.text('Cloud Platforms: AWS, Azure, Linux', 20, 169);
  doc.text('Infrastructure as Code: Terraform, Ansible, CloudFormation', 20, 174);
  doc.text('Programming: Python, Bash, PowerShell', 20, 179);
  
  // Education
  doc.setFontSize(14);
  doc.setTextColor(249, 115, 22);
  doc.text('EDUCATION', 20, 192);
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.text('Bachelor of Technology in Mechanical Engineering', 20, 199);
  doc.setFont('helvetica', 'normal');
  doc.text('Thulaja Ram University, Jharkhand', 20, 204);
  
  // Certifications
  doc.setFontSize(14);
  doc.setTextColor(249, 115, 22);
  doc.text('CERTIFICATIONS', 20, 217);
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('• AWS Cloud Practitioner Certification Basic', 20, 224);
  doc.text('• GitLab Foundation Certification', 20, 229);
  doc.text('• Kubernetes Certification', 20, 234);
  doc.text('• Basic Python Programming', 20, 239);
  
  // Languages
  doc.setFontSize(14);
  doc.setTextColor(249, 115, 22);
  doc.text('LANGUAGES', 20, 252);
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('• English: Speaking / Reading / Writing', 20, 259);
  doc.text('• Hindi: Native Language', 20, 264);
  
  // Save the PDF
  doc.save('Chandan_Kumar_CV.pdf');
};
