type ReviewProps = {
  name: string
  date: string
  rate: number
  icon: string
  comment: string
}

export class Review {
  name: string
  date: string
  rate: number
  icon: string
  comment: string

  constructor({name, comment, date, icon, rate}: ReviewProps) {
    this.name = name
    this.date = date
    this.rate = rate
    this.comment = comment
    this.icon = icon
  }
}

const REVIEWS: Review[] = [
  new Review({
    name: 'Yelena Belova',
    date: 'Today',
    rate: 5,
    icon: '',
    comment:
      'Pretty nice. The entrance is quite far from the parking lot but wouldnt be much of a problem if it wasnt raining. Love the interior :)',
  }),
  new Review({
    name: 'Mark Tawor',
    date: 'Today',
    rate: 5,
    icon: '',
    comment:
      'A really great place and amazing work place, I really love staying there! Will definitely come back!',
  }),
  new Review({
    name: 'James Mulner',
    date: 'Today',
    rate: 5,
    icon: '',
    comment:
      'Ketut offering supports to almost every cases, always reachable and was really helpful. definitely value for money stay!',
  }),
]

export default REVIEWS
