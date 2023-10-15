import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from '../../data/fakeData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  private id: string = '1';
  photoCover: string = 'https://placehold.co/600x300';
  title: string = 'Sample content Title';
  description: string = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quo sunt dolorum quas maiores aliquid ab perspiciatis rerum numquam repellat minima, amet quibusdam nisi quaerat maxime? Nisi, aut odit. Commodi!
  Nam ducimus deleniti saepe sunt at vero voluptatem amet aliquid odit, nostrum, dignissimos voluptate sint corrupti maxime possimus aspernatur. Nemo laboriosam quibusdam, quaerat tempore eveniet in iure aliquid alias magnam.
  Ipsa ad consequatur fuga nihil. Nisi voluptate, repellendus mollitia voluptas reiciendis suscipit vitae fugiat, laudantium, et exercitationem ad labore quas laborum. Ullam, vero. Quod consequatur laudantium a similique. Non, facere?
  Quod totam soluta ducimus, porro corporis voluptatibus officiis. Voluptatum similique expedita delectus. Fugiat quae commodi animi provident exercitationem? Suscipit nam omnis quaerat beatae. Pariatur quisquam eum, consequuntur doloremque officia maxime.
  Eum, quis aliquid officiis nemo impedit possimus laborum, mollitia earum nostrum non magni. Sequi magnam similique voluptatum eos saepe dicta recusandae facilis fugit consequatur atque, beatae, nostrum repellat accusantium cumque.
  Distinctio in tempore, eveniet fugit suscipit rem labore, voluptates impedit voluptatibus illo iure natus dolorum, dolore fugiat a magni nemo consequuntur eligendi enim similique tenetur obcaecati dolorem. Fugit, officiis praesentium?
  Doloremque, totam ut? Explicabo nihil, sequi odio debitis non modi corrupti a doloribus voluptas enim cumque saepe totam alias, officia blanditiis minus hic delectus ducimus quidem? Quasi quibusdam alias quos!`;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value: any) => {
      this.id = value.get('id');
    });
    this.setValuesToContent(this.id);
  }

  setValuesToContent(id: string): void {
    const result = fakeData.filter((item) => item.id.toString() === id);
    if (result.length > 0) {
      this.title = result[0].title;
      this.description = result[0].description;
      this.photoCover = result[0].photoCover;
    }
  }
}
