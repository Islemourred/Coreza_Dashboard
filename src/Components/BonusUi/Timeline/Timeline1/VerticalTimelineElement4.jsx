import React from 'react'
import { Activity } from 'react-feather'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { H4 } from '../../../../AbstractElements'
import { TimelineElement4Heading } from '../../../../Constant'

const VerticalTimelineElement4 = () => {
  return (
    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Feb 14"
                    animate={true}
                    icon={<Activity />}>
                    <H4 attrH4={{ className: 'vertical-timeline-element-subtitle' }}>{TimelineElement4Heading}</H4>
                    <audio controls preload="none">
                        <source src={require('../../../../assets/audio/horse.ogg')} type="audio/ogg" />
                        {'Your browser does not support the audio element.'}
                    </audio>
                </VerticalTimelineElement>
  )
}

export default VerticalTimelineElement4