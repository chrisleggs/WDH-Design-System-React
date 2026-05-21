/* ApiModelIntro — real source: components.fig · within 7:3217
   The "Atmospheric Model API" page intro: H1, intro paragraphs,
   numbered step groups, and a closing "Using your application" block. */

export interface ApiStep {
  /** Optional prefix rendered bold (e.g. an endpoint signature). */
  code?: string;
  /** Trailing prose. Concatenated after `code` with a single space. */
  text: string;
}

export interface ApiStepGroup {
  heading: string;
  items: ApiStep[];
}

interface ApiModelIntroProps {
  title?: string;
  intro?: string[];
  groups?: ApiStepGroup[];
  closing?: { heading: string; paragraphs: string[] };
}

const DEFAULT_INTRO = [
  "This API allows you to retrieve orders for Atmospheric Model Data otherwise known as 'Gridded' data. The API described here contains a definition for all requests as well as examples of how to write your code to interface with our gateway to retrieve your data.",
  "When you call this API you will need your API key and can begin by making a call to /1.0.0/orders (this will give you all of your Order IDs).",
];

const DEFAULT_GROUPS: ApiStepGroup[] = [
  {
    heading: "API Usage is typically done in 4 Steps:",
    items: [
      { code: "Call GET /1.0.0/orders", text: "- to programmatically get each order's \"orderId\" field" },
      { code: "Call GET /1.0.0/orders/{orderId}/latest", text: "- to get a list of \"fileId\" entries (these represent all the files available for this order)" },
      { code: "Call GET /1.0.0/orders/{orderId}/latest/{fileId}", text: "- to get more detailed information about each file if required" },
      { code: "Call GET /1.0.0/orders/{orderId}/latest/{fileId}/data", text: "- with an Accept header of application/x-grib to get access to a specific GRIB file" },
    ],
  },
  {
    heading: "There are additional end points to query the runs available:",
    items: [
      { code: "Call GET /1.0.0/runs", text: "- to get each available run" },
      { code: "Call GET /1.0.0/runs/{modelId}", text: "- to get each available run for a particular model" },
    ],
  },
];

const DEFAULT_CLOSING = {
  heading: "Using your application",
  paragraphs: [
    "Using your application, you can go through multiple orders and then retrieve the files for each.",
    "Please be aware that the files could be delivered by redirecting your client, so your client should follow any HTTP 302 redirects it gets to allow it to download the file. Please note the file ID will need to be URL encoded.",
    "This is done in Curl by adding -L or --location (in programming languages, you will need to visit the new URL to get your file).",
    "If there are any errors or issues, each endpoint will provide an appropriate HTTP response and may provide a JSON body providing you with further helpful information, so please do not forget to check for errors.",
    "If you are testing before development or downloading using scripts with a tool like Curl you can view errors using --verbose. If you do not do this it could just appear that you are getting \"nothing back\".",
  ],
};

export default function ApiModelIntro({
  title = "Atmospheric Model API",
  intro = DEFAULT_INTRO,
  groups = DEFAULT_GROUPS,
  closing = DEFAULT_CLOSING,
}: ApiModelIntroProps) {
  return (
    <article
      style={{
        fontFamily: "var(--wdh-font-brand)",
        color: "var(--wdh-text-primary)",
        maxWidth: 800,
      }}
    >
      <h1
        style={{
          fontSize: "var(--wdh-font-display-lg)",
          lineHeight: "67px",
          fontWeight: 600,
          color: "var(--wdh-text-primary)",
          margin: 0,
        }}
      >
        {title}
      </h1>

      {intro.map((p, i) => (
        <p
          key={i}
          style={{
            fontSize: "var(--wdh-font-body-lg)",
            lineHeight: "24px",
            fontWeight: 400,
            color: "var(--wdh-text-primary)",
            marginTop: i === 0 ? "var(--wdh-space-xl)" : "var(--wdh-space-md)",
            marginBottom: 0,
          }}
        >
          {p}
        </p>
      ))}

      {groups.map((g) => (
        <section key={g.heading} style={{ marginTop: "var(--wdh-space-2xl)" }}>
          <h2
            style={{
              fontSize: "var(--wdh-font-headline-md)",
              lineHeight: "34px",
              fontWeight: 600,
              color: "var(--wdh-text-primary)",
              margin: 0,
            }}
          >
            {g.heading}
          </h2>
          <ol
            style={{
              listStyle: "decimal",
              paddingLeft: 24,
              marginTop: "var(--wdh-space-md)",
              marginBottom: 0,
            }}
          >
            {g.items.map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: "var(--wdh-font-body-lg)",
                  lineHeight: "24px",
                  color: "var(--wdh-text-primary)",
                  marginBottom: 4,
                }}
              >
                {item.code && (
                  <code
                    style={{
                      fontFamily: "var(--wdh-font-mono)",
                      fontSize: "var(--wdh-font-mono-md)",
                      background: "var(--wdh-surface-muted)",
                      padding: "1px 6px",
                      borderRadius: 3,
                      color: "var(--wdh-text-primary)",
                    }}
                  >
                    {item.code}
                  </code>
                )}
                {item.code ? " " : ""}
                {item.text}
              </li>
            ))}
          </ol>
        </section>
      ))}

      {closing && (
        <section style={{ marginTop: "var(--wdh-space-2xl)" }}>
          <h2
            style={{
              fontSize: "var(--wdh-font-headline-md)",
              lineHeight: "34px",
              fontWeight: 600,
              color: "var(--wdh-text-primary)",
              margin: 0,
            }}
          >
            {closing.heading}
          </h2>
          {closing.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "var(--wdh-font-body-lg)",
                lineHeight: "24px",
                color: "var(--wdh-text-primary)",
                marginTop: "var(--wdh-space-md)",
                marginBottom: 0,
              }}
            >
              {p}
            </p>
          ))}
        </section>
      )}
    </article>
  );
}