import { motion } from "framer-motion";
import { leetCodeStats } from "../constants";
import leetcodeLogo from "../assets/leetcode-logo.png";

// Reusable Progress bar component
const ProgressBar = ({ label, value, max, color }) => {
  const percentage = (value / max) * 100;
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-secondary text-sm">{label}</span>
        <span className="text-white text-sm">
          {value}/{max}
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`h-2 rounded-full ${color}`}
        ></motion.div>
      </div>
    </div>
  );
};

const LeetCode = () => {
  const problemsSolvedTotal =
    parseInt(leetCodeStats.solvedProblems.easy.split("/")[0]) +
    parseInt(leetCodeStats.solvedProblems.medium.split("/")[0]) +
    parseInt(leetCodeStats.solvedProblems.hard.split("/")[0]);

  return (
    <section id="leetcode" className="max-w-7xl mx-auto p-8">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-12 flex items-center justify-center gap-4">
        <img
          src={leetcodeLogo}
          alt="LeetCode Logo"
          className="w-12 h-12 md:w-16 md:h-16 object-contain"
        />
        LeetCode Profile
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 justify-center">
        {/* Left Card: Profile & Overview */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center bg-tertiary p-8 rounded-2xl shadow-lg w-full lg:w-1/3"
        >
          <img
            src={leetCodeStats.profilePic}
            alt={leetCodeStats.username}
            className="w-32 h-32 rounded-full object-cover border-4 border-[#915eff] mb-6"
          />
          <h3 className="text-white font-bold text-3xl">
            {leetCodeStats.username}
          </h3>
          <p className="text-secondary text-lg mb-4">@{leetCodeStats.handle}</p>
          <p className="text-white text-xl font-semibold mb-2">
            Rank: <span className="text-[#915eff]">{leetCodeStats.rank}</span>
          </p>
          <p className="text-secondary text-base mb-6 max-w-xs">
            MAIT Delhi, passionate about coding in C++ and Diving Deep into C++
            & DSA.
          </p>
          <a
            href="https://leetcode.com/anuragsingh_123/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#915eff] text-white px-6 py-3 rounded-full hover:bg-[#7a4ee0] transition-colors font-semibold"
          >
            View LeetCode Profile
          </a>
        </motion.div>

        {/* Right Card: Problem Solving & Badges */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col bg-tertiary p-8 rounded-2xl shadow-lg w-full lg:w-2/3"
        >
          <h3 className="text-white font-bold text-3xl mb-6 text-center">
            Problem Solving Progress
          </h3>
          <div className="flex flex-col sm:flex-row justify-around items-center mb-8">
            <div className="relative w-40 h-40 flex items-center justify-center mb-6 sm:mb-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-gray-700"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="60"
                  cx="80"
                  cy="80"
                />
                <motion.circle
                  className="text-[#915eff]"
                  strokeWidth="8"
                  strokeDasharray={2 * Math.PI * 60}
                  stroke="currentColor"
                  fill="transparent"
                  r="60"
                  cx="80"
                  cy="80"
                  initial={{ strokeDashoffset: 2 * Math.PI * 60 }}
                  whileInView={{
                    strokeDashoffset:
                      2 * Math.PI * 60 -
                      2 *
                        Math.PI *
                        60 *
                        (problemsSolvedTotal /
                          leetCodeStats.solvedProblems.totalAvailable),
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-white text-3xl font-bold">
                  {problemsSolvedTotal}
                </span>
                <span className="text-secondary text-sm">Solved</span>
              </div>
            </div>
            <div className="w-full sm:w-2/3 mt-6 sm:mt-0">
              <ProgressBar
                label="Easy"
                value={parseInt(
                  leetCodeStats.solvedProblems.easy.split("/")[0]
                )}
                max={parseInt(leetCodeStats.solvedProblems.easy.split("/")[1])}
                color="bg-green-500"
              />
              <ProgressBar
                label="Medium"
                value={parseInt(
                  leetCodeStats.solvedProblems.medium.split("/")[0]
                )}
                max={parseInt(
                  leetCodeStats.solvedProblems.medium.split("/")[1]
                )}
                color="bg-yellow-500"
              />
              <ProgressBar
                label="Hard"
                value={parseInt(
                  leetCodeStats.solvedProblems.hard.split("/")[0]
                )}
                max={parseInt(leetCodeStats.solvedProblems.hard.split("/")[1])}
                color="bg-red-500"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <p className="text-secondary text-sm mb-2">Badges:</p>
            <div className="flex flex-wrap gap-4">
              {leetCodeStats.badges.map((badge) => (
                <img
                  key={badge.id}
                  src={badge.image}
                  alt={badge.name}
                  title={badge.name} // Shows name on hover
                  className="w-16 h-16 object-contain transition-transform hover:scale-110"
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-white text-xl font-semibold mb-4 text-left">
              Activity & Badges
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 bg-primary p-4 rounded-lg">
              <div>
                <p className="text-secondary text-sm">
                  Submissions (Past Year):
                </p>
                <p className="text-white font-medium text-lg">
                  {leetCodeStats.submissionsPastYear}
                </p>
              </div>
              <div>
                <p className="text-secondary text-sm">Total Active Days:</p>
                <p className="text-white font-medium text-lg">
                  {leetCodeStats.totalActiveDays}
                </p>
              </div>
              <div>
                <p className="text-secondary text-sm">Badges:</p>
                <p className="text-white font-medium text-lg">
                  {/* --- FIX IS HERE --- */}
                  {leetCodeStats.badges.length} ({leetCodeStats.mostRecentBadge}
                  )
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCode;
