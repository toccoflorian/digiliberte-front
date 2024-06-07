import { NgStyle } from '@angular/common';
import { Component, Input, input } from '@angular/core';
/**
 * `TitleboxComponent` is an Angular component that provides a customizable title box.
 * It supports dynamic inputs for background color, border color, and text color,
 * allowing easy customization to fit various design needs.
 *
 * ### Inputs:
 * - `backgroundColor`: A string value that sets the background color of the title box.
 * - `borderColor`: A string value that sets the border color of the title box.
 * - `textColor`: A string value that sets the color of the text within the title box.
 *
 * ### Example:
 * ```html
 * <app-titlebox [backgroundColor]="'lightblue'" [borderColor]="'darkblue'" [textColor]="'white'">
 *   Here is some text!
 * </app-titlebox>
 * ```
 *
 * This component is designed to enhance UI flexibility and visual consistency across an application.
 */
@Component({
  selector: 'app-titlebox',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './titlebox.component.html',
  styleUrls: ['./titlebox.component.scss']
})

export class TitleboxComponent {
   /**
   * Background color of the title box, specified as a CSS-compatible color string.
   */
   @Input() backgroundColor?: string;

   /**
    * Border color of the title box, specified as a CSS-compatible color string.
    */
   @Input() borderColor?: string;
 
   /**
    * Text color within the title box, specified as a CSS-compatible color string.
    */
   @Input() textColor?: string;

}
