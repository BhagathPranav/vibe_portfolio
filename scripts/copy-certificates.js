import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'Certificates');
const destDir = path.join(rootDir, 'public', 'certificates');

const filesToCopy = [
  '23881A1275.pdf',
  'AWS/AWS Amazon Bedrock Getting.pdf',
  'AWS/AWS Foundations of Prompt.pdf',
  'AWS/AWS Introduction to Generative AI.pdf',
  'AWS/AWS Planning a Generative AI.pdf',
  'AWS/AWS- Amazon Q Developer.pdf',
  'AWS/AWS- Exploring Amazon Nova models using Bedrock.pdf',
  'AWS/AWS- Introduction to Amazon.pdf',
  'Data Analyst-Certificate.pdf',
  'Data_Campus_Data Manipulation with pandas.pdf',
  'DataCampus_inter_python.pdf',
  'DataCampus_intro_python.pdf',
  'ML Nassom.pdf',
  'TATA - Data Visualisation.pdf',
  'MERN.pdf',
  'MEAN.pdf',
  'Deloitte cer.pdf',
  'Gen AI TATA Cer.pdf',
  'Networking_Devices_and_Initial_Configuration_certificate_bhagathmunna057-gmail-com_bb960b7b-c9f8-4385-addc-07cddc23789e.pdf',
  'Patent -2.pdf',
  'Internship_Certificate - Bhagath_Pranav_Kumar.pdf',
  'Project_Completion_Certificate - Bhagath_Pranav_Kumar.pdf',
  'Certificate_of_Participation - Bhagath_Pranav_Kumar.pdf'
];

console.log('Copying certificates to public/certificates...');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const awsDestDir = path.join(destDir, 'AWS');
if (!fs.existsSync(awsDestDir)) {
  fs.mkdirSync(awsDestDir, { recursive: true });
}

let copiedCount = 0;
filesToCopy.forEach(file => {
  const src = path.join(srcDir, file);
  const dest = path.join(destDir, file);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    copiedCount++;
  } else {
    console.warn(`Warning: Source file not found: ${src}`);
  }
});

console.log(`Successfully copied ${copiedCount} certificates.`);
