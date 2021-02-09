import { Component, OnInit } from "@angular/core";
import { TagModel } from "./tag.model";
import { TagService } from "./tag.service";

@Component({
  selector: "app-tag-list",
  templateUrl: "./tag-list.component.html",
  styleUrls: ["./tag-list.component.css"]
})
export class TagListComponent implements OnInit {
  tags: TagModel[];
  constructor(private tagService: TagService) {}

  ngOnInit() {
    this.getTags();
  }

  getTags() {
    this.tagService.getAllTags().subscribe(tags => (this.tags = tags.data));
  }
}
