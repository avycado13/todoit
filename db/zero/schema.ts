import { Session } from '@/lib/auth';
import {
  ANYONE_CAN,
  definePermissions,
  ExpressionBuilder,
  Schema as ZeroSchema,
  type Row
} from '@rocicorp/zero';
import { schema as genSchema } from './schema.gen';

// Define a minimal user table for the relationship reference
// Assuming 'user' table exists and has an 'id' primary key of type string.


export const schema = {
  ...genSchema,
  enableLegacyMutators: true,
} as const satisfies ZeroSchema;

export type Schema = typeof schema;
export type Task = Row<typeof schema.tables.tasks>;
export type User = Row<typeof schema.tables.user>;

const allowIfTaskOwner = (
  session: Session,
  { cmp }: ExpressionBuilder<Schema, 'tasks'>,
) => {
  // You can see a task if you are its owner.
  return cmp('userId', session.user.id);
};

export const permissions = definePermissions<Session, Schema>(schema, () => {
  return {
    tasks: {
      row: {
        select: [allowIfTaskOwner],
        insert: ANYONE_CAN,
        update: {
          preMutation: [allowIfTaskOwner],
        },
        delete: [allowIfTaskOwner],
      },
    },
    user: {
      row: {
        select: ANYONE_CAN,
        insert: ANYONE_CAN,
        update: {
          preMutation: ANYONE_CAN,
        },
        delete: ANYONE_CAN,
      },
    },
  };
});