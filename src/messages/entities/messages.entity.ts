import { BasicMessage } from "@aries-framework/core/build/modules/basic-messages/messages/BasicMessage";

export class MessagesEntity {
  [x: string]: any;
  /**
   * Messages
   * @example Messages Entity
   */
  content: string;
  sentTime?: Date;
  id?: string;
  locale?: string;
}
