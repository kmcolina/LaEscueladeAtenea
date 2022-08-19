CREATE TABLE "Users" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar,
  "encrypted_password" varchar
);

CREATE TABLE "Skills" (
  "skill_code" int PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "Level_Skill" (
  "level_skill_code" int PRIMARY KEY,
  "grade" varchar,
  "skill_code" int,
  "user_id" int
);

CREATE TABLE "Future_skills" (
  "id" int PRIMARY KEY,
  "skill_code" int,
  "user_id" int
);

CREATE TABLE "Questions" (
  "question_id" int PRIMARY KEY,
  "question_text" varchar,
  "skill_code" int,
  "quiz_id" int
);

CREATE TABLE "Answers" (
  "answer_id" int PRIMARY KEY,
  "question_id" int,
  "answer_text" varchar,
  "is_correct" boolean
);

CREATE TABLE "Responses" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "quiz_id" int,
  "score" int
);

CREATE TABLE "Quiz" (
  "quiz_id" int PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "Modules" (
  "module_code" int PRIMARY KEY,
  "name" varchar,
  "video" varchar,
  "extra_info" text,
  "skill_code" int,
  "quiz_id" int
);

CREATE TABLE "progress_module" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "module_code" int,
  "score_progress" int
);

ALTER TABLE "Level_Skill" ADD FOREIGN KEY ("skill_code") REFERENCES "Skills" ("skill_code");

ALTER TABLE "Level_Skill" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("id");

ALTER TABLE "Future_skills" ADD FOREIGN KEY ("skill_code") REFERENCES "Skills" ("skill_code");

ALTER TABLE "Future_skills" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("id");

ALTER TABLE "Questions" ADD FOREIGN KEY ("skill_code") REFERENCES "Skills" ("skill_code");

ALTER TABLE "Questions" ADD FOREIGN KEY ("question_id") REFERENCES "Answers" ("question_id");

ALTER TABLE "Users" ADD FOREIGN KEY ("id") REFERENCES "Responses" ("user_id");

ALTER TABLE "Responses" ADD FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id");

ALTER TABLE "Modules" ADD FOREIGN KEY ("skill_code") REFERENCES "Skills" ("skill_code");

ALTER TABLE "Modules" ADD FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id");

ALTER TABLE "progress_module" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("id");

ALTER TABLE "progress_module" ADD FOREIGN KEY ("module_code") REFERENCES "Modules" ("module_code");
