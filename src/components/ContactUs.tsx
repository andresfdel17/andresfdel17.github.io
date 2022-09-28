import React from 'react'
import { resumeData } from '../types/types'

const ContactUs = (props: { resumeData: resumeData }) => {
  let { resumeData } = props;
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Sorry but now i'm not free to work out of my actual job
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>Linked in :
              {resumeData.linkedinId}
            </h4>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ContactUs