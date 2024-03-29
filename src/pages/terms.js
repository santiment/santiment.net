import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GetStarted from '../components/GetStarted/GetStarted'
import Subheading from '../components/Heading/Subheading'
import styles from './terms.module.scss'

const TermsPage = ({ intl }) => (
  <Layout>
    <SEO
      title='Santiment Terms & Conditions'
      description='Please review the T&C contained herein carefully. By clicking “I agree” or by using the Services, You acknowledge and agree that You have read, understood, and accepted all of the following T&C, as well as all of the terms and conditions which are incorporated herein by reference.'
    />
    <div className={styles.wrapper}>
      <Subheading className={styles.title}>
        Santiment Terms & Conditions
      </Subheading>
      <div className={styles.date}>Last updated: July 2023</div>
      <div className={styles.desc}>
        Please review the T&C contained herein carefully. By clicking “I agree” or by using the Services, You acknowledge and agree that You have read, understood, and accepted all of the following T&C, as well as all of the terms and conditions which are incorporated herein by reference.
      </div>
      <div className={styles.content}>
        <h2>1. RIGHTS AND OBLIGATIONS</h2>
        <p>
          1.1. The following terms and conditions (the “<b>T&C</b>”) constitute
          a binding agreement between Santiment AG, a limited company
          registered under the laws of Switzerland, registered with the Register
          of Commerce under No. <b>CHE-424.007.779</b> and with registered
          address Dammstr. 16, Zug, 6300, Switzerland (“
          <b>Santiment</b>”) and the person, persons, or entity (“<b>You</b>”)
          using Santiment’s mobile and web services at{' '}
          <a
            href='https://santiment.net/'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://santiment.net/
          </a>{' '}
          and, in general, accessing any data, information, signals, insights,
          analysis or other contents or using any services provided by Santiment
          (collectively the “<b>Services</b>”).
        </p>
        <p>
          1.2. By using the Services, You acknowledge and agree that You have
          read, understood, and accepted all of the following T&C and agree to
          be legally bound by these T&C, in their most recent version; You
          further represent and warrant that: (i) You are of legal age to enter
          into a binding agreement; and (ii) if You represent a corporation,
          governmental organization or other legal entity, You have the right,
          power and authority to enter into these T&C on behalf of such
          corporation, governmental organization or other legal entity and to
          legally bind it to these T&C.
        </p>
        <p>
          1.3. Your use of the Services is expressly contingent upon Your
          acceptance of these T&C.
        </p>
        <p>
          1.4. Santiment may amend these T&C at any time. Amendments will be
          effective 7 (seven) days after the modified terms and conditions have
          been posted on Santiment’s website at{' '}
          <a
            href='https://santiment.net/'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://santiment.net/
          </a>
          , except for amendments that relate to new features or made for legal
          purposes, which will become effective immediately. If You do not agree
          to such modified terms, You should discontinue Your use of the
          Services.
        </p>

        <h2>2. SERVICES</h2>
        <p>
          2.1. Santiment, through the Services, enables You to access data,
          information, signals, insights, analysis or other contents including,
          among others, content streams, the Santiment Database (SANbase) and
          data-feeds relating to cryptocurrencies and other digital assets (Santiment’s Data).
        </p>
        <p>
          2.2. Content streams can be selected according to Your investing
          style; they include, among others, token sale analysis, economic
          structures and market researches, project due diligence, team analysis
          and regulations country by country. The Santiment Database (SANbase)
          is a database providing You with information on projects, their
          founders, and economics. Data-feeds are mechanisms for receiving
          updated data from data sources. Santiment, through the Services,
          enables You to access Santiment data-feeds, blockchain data-feeds and
          crowdsourced data-feeds.
        </p>
        <p>
          2.3. By using the Services, You acknowledge and agree that Santiment
          does not acts or serves as Your broker, intermediary, agent, or
          advisor with respect to any action (including refraining from any
          action) You make or intend to make using the Services. Santiment owes
          You no fiduciary duty.
        </p>
        <p>
          2.4. Neither the Services nor these T&C constitute a solicitation,
          offer, opinion, endorsement or recommendation by Santiment to buy or
          sell any security, or to provide legal, tax, accounting, or investment
          advice or services regarding the profitability or suitability of any
          security or investment. Neither the Services nor these T&C include or
          contain any information or indication that might be considered as a
          recommendation or that might be used to base any investment decision.
        </p>
        <p>
          2.5. The Services are experimental and are undergoing continuous
          development. While the Services can be used in their current state,
          Santiment reserves the right to make any changes to the Services, with
          or without notice to you.
        </p>

        <h2>3. SERVICE FEES</h2>
        <p>
          3.1. Santiment may charge fees for access to all or part of the
          Services including, without limitation, Santiment’s subscription
          service.
        </p>
        <p>
          3.2. In case services provided by third parties (such as exchanges and
          asset management platforms) support or are integrated with the
          Services, fees for access to all or part of the Services may be
          debited directly on Your account or digital assets wallet with such
          third party.
        </p>

        <h2>4. SERVICE LIMITATIONS AND MODIFICATIONS</h2>
        <p>
          4.1. Santiment will make reasonable efforts to keep the Services
          operational. However, certain technical difficulties or maintenance
          may, from time to time, result in temporary interruptions. Santiment
          reserves the right, periodically and at any time, to modify or
          discontinue, temporarily or permanently, functions and features of the
          Services, with or without notice, without liability to You, for any
          interruption, modification, or discontinuation of the Services or any
          function or feature thereof.
        </p>

        <h2>5. KNOWLEDGE REQUIRED</h2>
        <p>
          5.1. By using the Services, You represent and warrant that (i) You
          fully understand and have significant experience of cryptocurrencies,
          digital assets, blockchain systems and services, and (ii) You fully
          understand the risks associated with the trading of cryptocurrencies
          and digital assets as well as the mechanics related to the use of such
          cryptocurrencies and digital assets (including with respect to their
          storage and exchange).
        </p>
        <p>
          5.2. By using the Services, You acknowledge that trading markets are
          extremely volatile and shift quickly in terms of liquidity, market
          depth, and trading dynamics. Cryptocurrencies and digital assets are
          not suitable for people without the relevant knowledge and/or
          experience. By using the Services, You further represent and guarantee
          that You are aware of the risks related to cryptocurrencies and
          digital assets, for which You are solely responsible and liable.
        </p>

        <h2>6. INTELLECTUAL PROPERTY RIGHTS</h2>
        <p>
          6.1. You acknowledge and agree that all present and future rights in
          and title to the Services are reserved to and the property of
          Santiment and/or its licensors. Subject to Your compliance with these
          T&C, Santiment grants You a limited right to access and/or use the
          Services. The right to access and/or use the Services is a
          non-exclusive, non-transferable, revocable, limited right and license,
          and it is subject to the limitations and obligations contained herein.
          Nothing in these T&C grants You any license (other than as set out in
          this section), right, title, or ownership of, in, or to any of the
          Services. Nothing in these T&C gives You the right to make copies of
          the Services or of any portion thereof.
        </p>
        <p>
          6.2. You acknowledge and agree that Santiment retains all rights,
          title, and interest in and to all copyrights, trademarks, trade
          secrets, patents, and any other proprietary rights in the Services,
          the software and application programming interfaces (APIs) comprising
          the Services, and all content therein. You further acknowledge and
          agree that the Services present an individual character with regard to
          their selection and arrangement and are also protected as collected
          works under applicable laws. You acknowledge and agree that
          “Santiment”, its trademark, service mark, logo and graphics are the
          registered trademarks or trademarks of Santiment.
        </p>
        <p>
          6.3. You agree to protect the proprietary rights of Santiment and all
          others having rights in the Services during and after the term of this
          agreement and to comply with all reasonable written requests made by
          Santiment to protect its and others’ rights in the Services.
        </p>

        <h2>7. DATA PROTECTION</h2>
        <p>
          7.1. In order to provide You with the Services, You acknowledge and
          agree that Santiment may collect, store and process Your personal data
          and/or information. By using the Services, You have read, understood,
          and accepted to the terms of{' '}
          <a
            href='https://app.santiment.net/privacy-policy'
            target='_blank'
            rel='noopener noreferrer'
          >
            Santiment’s privacy policy
          </a>
          , and You acknowledge and agree that Santiment may use such data
          and/or information in accordance with the terms of its privacy policy.
        </p>

        <h2>8. TERMINATION</h2>
        <p>
          8.1. Santiment may terminate these T&C or suspend Your access to the
          Services at any time, in its sole discretion and with or without
          cause, including, without limitation, in the event of Your actual or
          alleged misuse of the Services or breach of these T&C.
        </p>

        <h2>9. LIMITATION OF LIABILITY</h2>
        <p>
          <b>
            9.1. In no event will Santiment, its officers, shareholders,
            employees, agents, directors, subsidiaries, affiliates, successors,
            assigns, suppliers, or licensors be liable for any loss or damages,
            including without limitation, direct, indirect, special,
            consequential, or punitive loss or damages, arising from or related
            to Your use of the Services, whether in an action of contract, tort
            or otherwise, and regardless of whether such damages were
            foreseeable and whether or not Santiment was advised of the
            possibility of such damages.
          </b>
        </p>
        <p>
          <b>
            9.2. Without limiting the generality of the foregoing, Santiment
            takes no responsibility for and will not be liable for any financial
            or other loss or damages arising from or related to the use of the
            Services, including, without limitation, to any of the following:
            (i) shutdown, malfunction, or other technical failure; (ii) data
            loss; (iii) unavailability, incorrectness, incompleteness,
            inaccuracy, unreliability, non-up-datedness of the Services or of
            third party data, information, signals, insights, analysis or other
            contents, services, or goods that may be linked to the Services;
            (iv) delays, errors, or interruptions in the transmission or
            delivery of the Service (v) “phishing” or other websites
            masquerading as Santiment; or (vi) loss of business or goodwill.
          </b>
        </p>
        <p>
          <b>
            9.3. Santiment takes no responsibility for decisions, actions or
            losses resulting from Your use of the Services. Santiment does not
            warrant or make any representations regarding the use or the results
            of the use of the Services in terms of their correctness,
            completeness, accuracy, reliability, up-datedness or otherwise.
          </b>
        </p>
        <p>
          <b>
            9.4. The Services may support or be integrated with third party
            services (such as exchanges and asset management platforms) or
            information; Santiment takes no responsibility for any third party
            services or information and will not be liable for any loss or
            damages caused by such third party services or information.
          </b>
        </p>
        <p>
          <b>
            9.5. Conversely, services provided by third parties may support or
            be integrated with the Services; in general, such third parties take
            no responsibility for the Services and will not be liable for any
            loss or damages caused by the Services; You expressly agree to
            release such third parties as well as their directors, officers,
            employees, contractors, agents, partners, and attorneys from any and
            all losses and to indemnify and hold them harmless from and against
            all losses. In such circumstances, Santiment’s liability will be
            limited according to the provisions of these T&C.
          </b>
        </p>
        <p>
          <b>
            9.6. The Services are provided on an “as is” and “as available”
            basis without any representations or warranties, whether express or
            implied; Santiment excludes all conditions, terms, representations
            and warranties, to the maximum extent permitted by applicable laws,
            with respect, in particular, to: (i) any implied warranty of
            merchantability or fitness for a particular purpose; (ii) any
            warranty of non-infringement; (i) any information provided; (ii) any
            results to be derived from the Services; and (v) any warranty
            regarding correctness, quality, accuracy, reliability, security,
            performance, completeness, timeliness or continued availability of
            the Services or any portion thereof. While the Services, including
            the Santiment Database (SANbase), have undergone testing and
            continue to be improved through feedback from their users, Santiment
            cannot guarantee that there will be no errors and/or bugs in the
            functioning of the Services.
          </b>
        </p>
        <p>
          <b>
            9.7. The Services are provided for information purposes only and are
            not intended for trading purposes. Santiment expressly disclaims, to
            the maximum extent permitted by applicable laws, any liabilities
            resulting from possible losses, damages or causes of actions which
            you may incur as a result of your investment decisions, for which
            you shall maintain full responsibility.
          </b>
        </p>
        <p>
          <b>
            9.8. In no event will the aggregate liability of Santiment, arising
            out of or related to these T&C and/or the Services, exceed the
            amount paid by you, if any, for using the Services.
          </b>
        </p>
        <p>
          <b>
            9.9. Any information in these T&C is given for general information
            purpose only and Santiment does not provide with any warranty as to
            the accuracy and completeness of this information.
          </b>
        </p>
        <p>
          <b>
            9.10. The limitations of liability set out above shall not be
            applicable in the event that Santiment, or a Santiment-employee has
            caused the damage by intentional misconduct or by gross negligence.
          </b>
        </p>

        <h2>10. RESTRICTIONS</h2>
        <p>
          10.1. By using the Services, You acknowledge and agree that You shall
          not use the Services if applicable laws, based on Your country of
          location, residency and/or citizenship, prohibit You from doing so in
          accordance with these T&C.
        </p>
        <p>
          10.2. By using the Services, You acknowledge and agree that You shall
          not use, or assist third parties to use, the Services in any way which
          may constitute a contravention of applicable laws or which may
          contradict the purposes or hinder the operations of the Services or
          hinder the operations of other users of the Services.
        </p>
        <p>
          10.3. You acknowledge and agree that You shall use the Services solely
          for your own private use and not for resale or other transfer to, or
          use by or for the benefit of, any third party. You agree not to use,
          transfer, distribute, or dispose of any data or information contained
          in the Services in any manner that could compete with the business of
          Santiment.{' '}
          <u>
            The Services may only be used between several different companies
            belonging to the same corporate group.
          </u>
        </p>
        <p>
          10.4. In case that You wish to resell Santiment’s Data to third parties, a corporate subscription is required. The right to resell Santiment’s Data to third parties is only valid during the validity of the subscription you have entered into. You can no longer resell Santiment’s Data to third parties once the subscription has expired or been cancelled.  In the event that your subscription has expired or been cancelled you can keep the Santiment’s Data previously collected only for Your personal use.
        </p>
        <p>
          10.5. Santiment, through the Services, enables You to share, input,
          upload, or otherwise make available to Santiment and its users data,
          information including insights, trends, signals and other contents
          which will be treated by Santiment, in each case, as non-confidential.
          With regard to such contents, You grant to Santiment a perpetual,
          irrevocable, non-exclusive, fully paid, royalty-free, sublicensable
          and transferable (in whole or in part) worldwide right to use, copy,
          publish, modify, create derivative works from, and otherwise exploit
          such contents for any purpose whatsoever.
        </p>
        <p>
          10.6. By using the Services, You expressly represent and warrant to
          Santiment that You will not share, input, upload, or otherwise make
          available any content through the Services that: (i) is promotional in
          nature or constitutes junk mail, spam, chain letters, pyramid schemes
          or the like; (ii) is unlawful, harmful, abusive, defamatory, vulgar,
          obscene or otherwise objectionable; (iii) You do not have the right to
          make available under any law or under contractual or fiduciary
          relationships (such as inside information, proprietary and
          confidential information); (iv) infringes any patent, trademark, trade
          secret, copyright or other proprietary rights of any party; or (v)
          contains software viruses or any other computer code, files or
          programs designed to interrupt, destroy or limit the functionality of
          any computer software or hardware, or telecommunications equipment.
        </p>

        <h2>11. INDEMNIFICATION</h2>
        <p>
          11.1. To the fullest extent permitted under applicable laws, You agree
          to hold harmless and indemnify Santiment, its officers, shareholders,
          employees, agents, directors, subsidiaries, affiliates, successors,
          assigns, suppliers, or licensors from and against all third party
          claims and all liabilities, damages, assessments, losses, costs, or
          expenses (including reasonable attorney fees) resulting from or
          arising out of (i) Your alleged or actual breach of these T&C,
          including, without limitation, Your express representations and
          warranties; (ii) Your alleged or actual use or misuse of the Services;
          and (ii) Your alleged or actual infringement or violation of any laws
          or of the rights of a third party.
        </p>

        <h2>12. TAXES</h2>
        <p>
          12.1. You shall be solely responsible for any taxes applying to the
          payments You make or receive trough the Services, and to collect,
          report, and remit such taxes to the appropriate tax authorities.
        </p>

        <h2>13. MISCELLANEOUS</h2>
        <p>
          13.1. <u>Entire agreement</u>: These T&C constitute all the terms and
          conditions agreed upon between You and Santiment and supersede any
          prior agreements in relation to the subject matter of these T&C,
          whether written or oral.
        </p>
        <p>
          13.2. <u>Severability and waiver</u>: Unless as otherwise stated in
          these T&C, should any provision of these T&C be held totally or
          partially invalid or unenforceable, such invalidity or
          unenforceability shall not in any manner affect or render invalid or
          unenforceable the remaining provisions of these T&C, and the
          application of that provision shall be enforced to the extent
          permitted by applicable laws.
          <br />
          The failure of Santiment to exercise or enforce any of the rights or
          provisions of these T&C shall not considered as a waiver of
          Santiment’s rights to do so.
        </p>
        <p>
          13.3. <u>Assignment</u>: Santiment may assign these T&C and/or
          delegate any of its obligations hereunder, in whole or in part. You
          may not assign these T&C or any part of them, nor transfer or
          sub-license Your rights under these T&C to any third party.
        </p>
        <p>
          13.4. <u>No partnership</u>: Nothing contained in this Agreement shall
          be deemed or construed to create a principal and agent, partnership or
          joint venture relationship between You and Santiment.
        </p>
        <p>
          13.5. <u>Force majeure</u>: Santiment will not be deemed in default of
          these T&C to the extent that performance of its obligations is delayed
          or prevented by reason of any external force including, without
          limitation, war, insurrections, bank failures, strikes, fires, floods,
          earthquakes, labor disputes, epidemics, governmental regulations,
          freight embargoes, natural disaster, act of government or any other
          cause beyond Santiment’s reasonable control.
        </p>
        <p>
          13.6. <u>Governing law and jurisdiction</u>: These T&C are subject to
          and governed by Swiss law to the exclusion of Swiss international
          private law and any international treaties. All disputes arising from
          or under these T&C shall be subject to the{' '}
          <b>
            exclusive jurisdiction of the competent courts of Lugano,
            Switzerland
          </b>
          .
        </p>
        <p>
          13.7. <u>Contacts</u>: If You have any questions regarding these T&C,
          please contact us at
          <br />
          <br />
          Santiment AG
          <br />
          Dammstrasse 16
          <br />
          6300 Zug
          <br />
          Switzerland
        </p>
      </div>
    </div>
    <GetStarted />
  </Layout>
)

export default injectIntl(TermsPage)
