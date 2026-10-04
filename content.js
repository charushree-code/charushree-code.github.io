/* =====================================================================
   PORTFOLIO CONTENT — edit this file to update the site.
   No 3D code here. Change the text, save, and commit. That's it.

   Tips
   - Wrap a number in **double stars** to make it bold, e.g. "**87% accuracy**".
   - Every entry ends with a comma, and text goes inside "double quotes".
   - Leave a link as "" if you don't have it yet; the button just won't show.
   - Newest projects go at the TOP of the list.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- PROJECTS (coffee table) ---------- */
  projects: [

    /* TEMPLATE: copy this block, paste it at the top, fill it in, then remove the slash-star markers.
    {
      title: "AWS + Snowflake data pipeline",
      context: "Personal project",          // short tag, e.g. "Personal project", "Remwes", "Coursework"
      status: "building",                   // "building" shows an In progress badge; use "" when done
      description: "Ingests a public dataset into Snowflake with S3 and Lambda, orchestrated by Airflow and modeled with dbt. **Runs daily**.",
      github: "https://github.com/charushree-code/your-repo",
      demo: "",                             // live link or dashboard, optional
      writeup: ""                           // your Substack post about it, optional
    },
    */

    {
      title: "Dynamic pricing engine",
      context: "Remwes",
      status: "",
      description: "Adjusts discounts using real-time demand scores and live event data across six time windows. Built in Python with a handoff spec for engineering.",
      github: "", demo: "", writeup: ""
    },
    {
      title: "Natural-language search API",
      context: "Remwes",
      status: "",
      description: "An LLM layer that turns what a person types into structured search parameters the product can query.",
      github: "", demo: "", writeup: ""
    },
    {
      title: "Image moderation",
      context: "Remwes",
      status: "",
      description: "NSFW image filtering with Amazon Rekognition for a social networking product.",
      github: "", demo: "", writeup: ""
    },
    {
      title: "AI content workflow",
      context: "Remwes",
      status: "",
      description: "An automated pipeline that generates marketing videos and social posts with AI video and image models.",
      github: "", demo: "", writeup: ""
    },
    {
      title: "Cost estimation tool",
      context: "Internship",
      status: "",
      description: "A neural network that beat linear regression with **test R² 0.964**, deployed behind a Form.io form and an n8n workflow on the company website.",
      github: "", demo: "", writeup: ""
    },
    {
      title: "Anxiety attack severity prediction",
      context: "Master's capstone",
      status: "",
      description: "An XGBoost model reaching **87% accuracy** on 1,500+ behavioral and physiological records, with Tableau dashboards for non-technical readers.",
      github: "https://github.com/charushree-code/Anxiety-attack-severity-prediction", demo: "", writeup: ""
    }
  ],

  /* ---------- SKILLS (whiteboard card) ---------- */
  skills: [
    { group: "Product and delivery", items: ["Product strategy", "MVP definition", "Requirements", "User stories and acceptance criteria", "Roadmapping", "Stakeholder management", "Vendor management", "UAT and QA", "Jira", "Trello"] },
    { group: "AI and ML", items: ["Python", "Pandas, NumPy, scikit-learn", "XGBoost", "TensorFlow and Keras", "OpenAI API", "Gemini API", "RAG", "AI automation", "Hugging Face", "Amazon Rekognition", "Claude Code", "Cursor"] },
    { group: "Data", items: ["SQL", "Power BI", "Power Query", "Tableau", "Spark Streaming", "Hadoop"] },
    { group: "Integrations and engineering", items: ["Stripe Connect", "REST and XML APIs", "n8n", "Webhooks", "JavaScript", "React", "Node.js", "Docker", "Git"] }
  ],

  /* ---------- CERTIFICATIONS (add new ones at the end) ---------- */
  certifications: [
    { name: "AWS Certified Solutions Architect – Associate", url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/956e55ec43b949f9ad0154d8bd0ec744" },
    { name: "SnowPro Core", url: "https://achieve.snowflake.com/d98e0a7c-b49f-456b-adb2-b32c747d5012#acc.Z7epjbV4" }
  ]
};
