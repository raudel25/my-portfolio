import React from "react";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// "MM/YYYY" -> { month: 1-12, year }; "Present" -> current month.
function parseDate(date) {
  if (date === "Present") {
    const now = new Date();
    return { month: now.getMonth() + 1, year: now.getFullYear() };
  }
  const [month, year] = date.split("/").map(Number);
  return { month, year };
}

// "MM/YYYY" -> "Mon YYYY"; "Present" passes through.
function formatDate(date) {
  if (date === "Present") return date;
  const { month, year } = parseDate(date);
  return `${MONTHS[month - 1]} ${year}`;
}

// Counts both ends, like LinkedIn: Sep 2025 – Oct 2026 is "1 yr 2 mos".
function formatDuration(start, end) {
  const from = parseDate(start);
  const to = parseDate(end);
  const total = (to.year - from.year) * 12 + (to.month - from.month) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  return [
    years && `${years} ${years === 1 ? "yr" : "yrs"}`,
    months && `${months} ${months === 1 ? "mo" : "mos"}`,
  ]
    .filter(Boolean)
    .join(" ");
}

function formatRange([start, end], showDuration) {
  const range = `${formatDate(start)} – ${formatDate(end)}`;
  return showDuration ? `${range} (${formatDuration(start, end)})` : range;
}

// Roles are listed most recent first.
function groupRange(roles) {
  return [roles[roles.length - 1].dates[0], roles[0].dates[1]];
}

function Skills({ skills }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li
          key={skill}
          className="px-2 py-1 bg-line text-fg rounded-full text-xs font-medium"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}

function SingleRole({ item }) {
  const role = item.roles[0];
  return (
    <div>
      <div className="flex items-center gap-4 mb-3">
        <img
          src={item.image}
          alt=""
          loading="lazy"
          width="40"
          height="40"
          className="w-10 h-10 flex-shrink-0 rounded-full object-cover bg-white"
        />
        <div>
          <h3 className="font-display text-xl font-semibold text-fg leading-snug">
            {role.title}
          </h3>
          <p className="text-sm">
            {item.company}, {role.location}
          </p>
        </div>
      </div>
      <p className="leading-relaxed mb-4">{role.description}</p>
      <Skills skills={role.skills} />
    </div>
  );
}

function MultipleRoles({ item, showDuration }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-5">
        <img
          src={item.image}
          alt=""
          loading="lazy"
          width="40"
          height="40"
          className="w-10 h-10 flex-shrink-0 rounded-full object-cover bg-white"
        />
        <h3 className="font-display text-xl font-semibold text-fg leading-snug">
          {item.company}
        </h3>
      </div>
      <ol className="border-l border-line ml-5 pl-5 flex flex-col gap-6">
        {item.roles.map((role) => (
          <li key={role.title}>
            <h4 className="font-semibold text-fg text-lg leading-snug">
              {role.title}
            </h4>
            <p className="text-sm mb-2">
              {formatRange(role.dates, showDuration)}, {role.location}
            </p>
            <p className="leading-relaxed mb-3">{role.description}</p>
            <Skills skills={role.skills} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Timeline({ items, showDuration = false }) {
  return (
    <ol className="relative border-l border-line ml-1.5">
      {items.map((item) => {
        const current = item.roles.some((role) => role.dates[1] === "Present");
        const range = groupRange(item.roles);
        return (
          <li key={item.company} className="relative pl-8 pb-12">
            <span
              className={`absolute -left-1.5 top-2 w-3 h-3 rounded-full ${
                current ? "bg-gold" : "bg-line"
              }`}
              aria-hidden="true"
            />
            <div className="md:flex md:gap-8">
              <div className="md:w-44 flex-shrink-0 text-sm mb-3 md:mb-0 md:pt-1">
                <p>{formatRange(range, false)}</p>
                {showDuration && <p>{formatDuration(...range)}</p>}
              </div>
              <div className="flex-1 max-w-3xl">
                {item.roles.length > 1 ? (
                  <MultipleRoles item={item} showDuration={showDuration} />
                ) : (
                  <SingleRole item={item} />
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
