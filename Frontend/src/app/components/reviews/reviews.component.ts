import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent {
  public softwareCompanyReviews: { review: string; rating: number }[] = [
    {
      review:
        'Amazing software! It has streamlined our workflow and increased productivity.',
      rating: 5,
    },
    {
      review:
        'The customer support is top-notch. Quick responses and effective solutions.',
      rating: 4,
    },
    {
      review:
        'Intuitive interface makes it easy for anyone to use, even without extensive technical knowledge.',
      rating: 5,
    },
    {
      review:
        'Feature-rich platform with all the tools we need to run our business efficiently.',
      rating: 4,
    },
    {
      review:
        'Regular updates and improvements show that the company is committed to staying ahead in technology.',
      rating: 5,
    },
    {
      review: 'Robust security features ensure our data is always protected.',
      rating: 4,
    },
    {
      review:
        'The software seamlessly integrates with other tools, making our workflow even smoother.',
      rating: 5,
    },
    {
      review:
        'Innovative solutions that have given us a competitive edge in the market.',
      rating: 4,
    },
    {
      review:
        'User-friendly design, even for complex functionalities. Great for both beginners and experts.',
      rating: 5,
    },
    {
      review:
        'Reliable performance, we have experienced minimal downtime since implementing this software.',
      rating: 4,
    },
    {
      review:
        'Cost-effective solution without compromising on quality or features.',
      rating: 5,
    },
    {
      review:
        'The training resources provided are comprehensive and helped our team quickly adapt to the new system.',
      rating: 4,
    },
    {
      review:
        'Regular webinars and tutorials keep us informed about new features and best practices.',
      rating: 5,
    },
    {
      review:
        'Customization options allow us to tailor the software to our specific needs.',
      rating: 4,
    },
    {
      review:
        'The mobile app is a game-changer, enabling us to manage tasks on the go.',
      rating: 5,
    },
    {
      review:
        'Transparent pricing with no hidden fees. Great value for the investment.',
      rating: 4,
    },
    {
      review:
        'Excellent documentation that makes it easy to troubleshoot issues independently.',
      rating: 5,
    },
    {
      review:
        'Collaborative features have improved teamwork and communication within our organization.',
      rating: 4,
    },
    {
      review: 'The software has scaled with our growing business seamlessly.',
      rating: 5,
    },
    {
      review:
        'Overall, a fantastic software solution that we highly recommend to others.',
      rating: 4,
    },
  ];
}
