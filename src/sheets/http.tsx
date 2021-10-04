import { Section } from '../models/Section'
import { Snippet } from '../models/Snippet'

import { Cheatsheet } from '../components/Cheatsheet'

const snip = new Snippet('HTTP Status Code')

// section
const one = new Section('1xx: informational')
one.addLine('100', 'Continue')
one.addLine('102', 'Processing')
snip.add(one)

// section
const two = new Section('2xx: Successful')
two.addLine('200', 'OK')
two.addLine('201', 'Created')
two.addLine('204', 'No Content')
snip.add(two)

// section
const three = new Section('3xx: Redirects')
three.addLine('301', 'Moved Permanently')
three.addLine('302', 'Found')
three.addLine('304', 'Not Modified')
snip.add(three)

// section
const four = new Section('4xx: Client Errors')
four.addLine('400', 'Bad Request')
four.addLine('401', 'Unauthorized')
four.addLine('403', 'Forbidden')
four.addLine('404', 'Not Found')
four.addLine('405', 'Method Not Allowed')
four.addLine('429', 'Too Many Requests')
snip.add(four)

// section
const five = new Section('5xx: Server Errors')
five.addLine('500', 'Internal Server Error')
five.addLine('501', 'Not Implemented')
five.addLine('502', 'Bad Gateway')
five.addLine('503', 'Service Unavailable')
five.addLine('504', 'Gateway Timeout')
snip.add(five)

export function Http() {
  return <Cheatsheet title={snip.title} elements={snip.elements} />
}
