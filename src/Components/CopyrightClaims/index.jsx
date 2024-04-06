import React from "react";
import "./style.css";

export default function Copyright({ theme }) {
  return (
    <>
      <div className={theme}>
        <div className="copyright_section">
          <h1 id="headline_copyright">Copyright Claims</h1>

          <p className="p_copy">
            We respect the intellectual property rights of others. You may not
            infringe the copyright, trademark, or other proprietary
            informational rights of any party. We may, in our sole discretion,
            remove any Content we have reason to believe violates any of the
            intellectual property rights of others and may terminate your use of
            the Website if you submit any such Content.
          </p>

          <p className="p_copy">
            <strong>REPEAT INFRINGER POLICY.</strong> As part of our
            repeat-infringement policy, any user for whose material we receive
            three good-faith and effective complaints within any contiguous
            six-month period will have his grant of use of the Website
            terminated.
          </p>

          <p className="space_between_bottom p_copy">
            Although we are not subject to United States law, we voluntarily
            comply with the Digital Millennium Copyright Act. Pursuant to Title
            17, Section 512(c)(2) of the United States Code, if you believe that
            any of your copyrighted material is being infringed on the Website,
            we have designated an agent to receive notifications of claimed
            copyright infringement. Notifications should be e-mailed to{" "}
            <a href="mailto:abuse@qy2mp3.nu">abuse@qy2mp3.nu</a> or sent to:
          </p>

          <address>
            <strong>Copyright Agent</strong>
            <br />
            DMCA Now LLC
            <br />
            512 Lucerne Ave.
            <br />
            Lake Worth FL 33460
            <br />
            United States
            <br />
            Fax: +1 (800) 371-0235
            <br />
            Email: <a href="mailto:notice@dmcanow.io">notice@dmcanow.io</a>
          </address>

          <p className="space_between_bottom p_copy">
            All notifications not relevant to us or ineffective under the law
            will receive no response or action thereupon. An effective
            notification of claimed infringement must be a written communication
            to our agent that includes substantially the following:
          </p>

          <ul>
            <li>
              Identification of the copyrighted work that is believed to be
              infringed. Please describe the work and, where possible, include a
              copy or the location (e.g., a URL) of an authorized version of the
              work;
            </li>
            <li>
              Identification of the material that is believed to be infringing
              and its location or, for search results, identification of the
              reference or link to material or activity claimed to be
              infringing. Please describe the material and provide a URL or any
              other pertinent information that will allow us to locate the
              material on the Website or on the Internet;
            </li>
            <li>
              Information that will allow us to contact you, including your
              address, telephone number and, if available, your e-mail address;
            </li>
            <li>
              A statement that you have a good faith belief that the use of the
              material complained of is not authorized by you, your agent or the
              law;
            </li>
            <li>
              A statement that the information in the notification is accurate
              and that under penalty of perjury that you are the owner or are
              authorized to act on behalf of the owner of the work that is
              allegedly infringed; and
            </li>
            <li>
              A physical or electronic signature from the copyright holder or an
              authorized representative.
            </li>
          </ul>

          <p className="space_between_bottom p_copy">
            If your User Submission or a search result to your website is
            removed pursuant to a notification of claimed copyright
            infringement, you may provide us with a counter-notification, which
            must be a written communication to our above-listed agent and
            satisfactory to us that includes substantially the following:
          </p>

          <ul>
            <li>Your physical or electronic signature;</li>
            <li>
              Identification of the material that has been removed or to which
              access has been disabled and the location at which the material
              appeared before it was removed or access to it was disabled;
            </li>
            <li>
              A statement under penalty of perjury that you have a good faith
              belief that the material was removed or disabled as a result of
              mistake or misidentification of the material to be removed or
              disabled;
            </li>
            <li>
              Your name, address, telephone number, email address and a
              statement that you consent to the jurisdiction of the courts in
              the address you provided, Anguilla and the location(s) in which
              the purported copyright owner is located; and
            </li>
            <li>
              A statement that you will accept service of process from the
              purported copyright owner or its agent.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
