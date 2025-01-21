import {z} from "zod"

export const createWorkflowSchema = z.object({
    name: z.string().max(100),
    description: z.string().max(200).optional()
})

export type createWorkflowSchemaType = z.infer<typeof createWorkflowSchema>