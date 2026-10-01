import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Team
 *
 */
export type TeamModel = runtime.Types.Result.DefaultSelection<Prisma.$TeamPayload>;
export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null;
    _avg: TeamAvgAggregateOutputType | null;
    _sum: TeamSumAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
};
export type TeamAvgAggregateOutputType = {
    teamId: number | null;
    rollNum: number | null;
    num: number | null;
    mate1rollNum: number | null;
    mate2rollNum: number | null;
    mate3rollNum: number | null;
    mate4rollNum: number | null;
};
export type TeamSumAggregateOutputType = {
    teamId: number | null;
    rollNum: number | null;
    num: number | null;
    mate1rollNum: number | null;
    mate2rollNum: number | null;
    mate3rollNum: number | null;
    mate4rollNum: number | null;
};
export type TeamMinAggregateOutputType = {
    teamId: number | null;
    teamName: string | null;
    leaderName: string | null;
    email: string | null;
    rollNum: number | null;
    depart: string | null;
    num: number | null;
    mate1Name: string | null;
    mate1rollNum: number | null;
    mate1Dept: string | null;
    mate2Name: string | null;
    mate2rollNum: number | null;
    mate2Dept: string | null;
    mate3Name: string | null;
    mate3rollNum: number | null;
    mate3Dept: string | null;
    mate4Name: string | null;
    mate4rollNum: number | null;
    mate4Dept: string | null;
    TransactionId: string | null;
    time: Date | null;
};
export type TeamMaxAggregateOutputType = {
    teamId: number | null;
    teamName: string | null;
    leaderName: string | null;
    email: string | null;
    rollNum: number | null;
    depart: string | null;
    num: number | null;
    mate1Name: string | null;
    mate1rollNum: number | null;
    mate1Dept: string | null;
    mate2Name: string | null;
    mate2rollNum: number | null;
    mate2Dept: string | null;
    mate3Name: string | null;
    mate3rollNum: number | null;
    mate3Dept: string | null;
    mate4Name: string | null;
    mate4rollNum: number | null;
    mate4Dept: string | null;
    TransactionId: string | null;
    time: Date | null;
};
export type TeamCountAggregateOutputType = {
    teamId: number;
    teamName: number;
    leaderName: number;
    email: number;
    rollNum: number;
    depart: number;
    num: number;
    mate1Name: number;
    mate1rollNum: number;
    mate1Dept: number;
    mate2Name: number;
    mate2rollNum: number;
    mate2Dept: number;
    mate3Name: number;
    mate3rollNum: number;
    mate3Dept: number;
    mate4Name: number;
    mate4rollNum: number;
    mate4Dept: number;
    TransactionId: number;
    time: number;
    _all: number;
};
export type TeamAvgAggregateInputType = {
    teamId?: true;
    rollNum?: true;
    num?: true;
    mate1rollNum?: true;
    mate2rollNum?: true;
    mate3rollNum?: true;
    mate4rollNum?: true;
};
export type TeamSumAggregateInputType = {
    teamId?: true;
    rollNum?: true;
    num?: true;
    mate1rollNum?: true;
    mate2rollNum?: true;
    mate3rollNum?: true;
    mate4rollNum?: true;
};
export type TeamMinAggregateInputType = {
    teamId?: true;
    teamName?: true;
    leaderName?: true;
    email?: true;
    rollNum?: true;
    depart?: true;
    num?: true;
    mate1Name?: true;
    mate1rollNum?: true;
    mate1Dept?: true;
    mate2Name?: true;
    mate2rollNum?: true;
    mate2Dept?: true;
    mate3Name?: true;
    mate3rollNum?: true;
    mate3Dept?: true;
    mate4Name?: true;
    mate4rollNum?: true;
    mate4Dept?: true;
    TransactionId?: true;
    time?: true;
};
export type TeamMaxAggregateInputType = {
    teamId?: true;
    teamName?: true;
    leaderName?: true;
    email?: true;
    rollNum?: true;
    depart?: true;
    num?: true;
    mate1Name?: true;
    mate1rollNum?: true;
    mate1Dept?: true;
    mate2Name?: true;
    mate2rollNum?: true;
    mate2Dept?: true;
    mate3Name?: true;
    mate3rollNum?: true;
    mate3Dept?: true;
    mate4Name?: true;
    mate4rollNum?: true;
    mate4Dept?: true;
    TransactionId?: true;
    time?: true;
};
export type TeamCountAggregateInputType = {
    teamId?: true;
    teamName?: true;
    leaderName?: true;
    email?: true;
    rollNum?: true;
    depart?: true;
    num?: true;
    mate1Name?: true;
    mate1rollNum?: true;
    mate1Dept?: true;
    mate2Name?: true;
    mate2rollNum?: true;
    mate2Dept?: true;
    mate3Name?: true;
    mate3rollNum?: true;
    mate3Dept?: true;
    mate4Name?: true;
    mate4rollNum?: true;
    mate4Dept?: true;
    TransactionId?: true;
    time?: true;
    _all?: true;
};
export type TeamAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: Prisma.TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: Prisma.TeamOrderByWithRelationInput | Prisma.TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType;
};
export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTeam[P]> : Prisma.GetScalarType<T[P], AggregateTeam[P]>;
};
export type TeamGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeamWhereInput;
    orderBy?: Prisma.TeamOrderByWithAggregationInput | Prisma.TeamOrderByWithAggregationInput[];
    by: Prisma.TeamScalarFieldEnum[] | Prisma.TeamScalarFieldEnum;
    having?: Prisma.TeamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamCountAggregateInputType | true;
    _avg?: TeamAvgAggregateInputType;
    _sum?: TeamSumAggregateInputType;
    _min?: TeamMinAggregateInputType;
    _max?: TeamMaxAggregateInputType;
};
export type TeamGroupByOutputType = {
    teamId: number;
    teamName: string;
    leaderName: string;
    email: string;
    rollNum: number;
    depart: string;
    num: number;
    mate1Name: string | null;
    mate1rollNum: number | null;
    mate1Dept: string | null;
    mate2Name: string | null;
    mate2rollNum: number | null;
    mate2Dept: string | null;
    mate3Name: string | null;
    mate3rollNum: number | null;
    mate3Dept: string | null;
    mate4Name: string | null;
    mate4rollNum: number | null;
    mate4Dept: string | null;
    TransactionId: string;
    time: Date;
    _count: TeamCountAggregateOutputType | null;
    _avg: TeamAvgAggregateOutputType | null;
    _sum: TeamSumAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
};
type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TeamGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TeamGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TeamGroupByOutputType[P]>;
}>>;
export type TeamWhereInput = {
    AND?: Prisma.TeamWhereInput | Prisma.TeamWhereInput[];
    OR?: Prisma.TeamWhereInput[];
    NOT?: Prisma.TeamWhereInput | Prisma.TeamWhereInput[];
    teamId?: Prisma.IntFilter<"Team"> | number;
    teamName?: Prisma.StringFilter<"Team"> | string;
    leaderName?: Prisma.StringFilter<"Team"> | string;
    email?: Prisma.StringFilter<"Team"> | string;
    rollNum?: Prisma.IntFilter<"Team"> | number;
    depart?: Prisma.StringFilter<"Team"> | string;
    num?: Prisma.IntFilter<"Team"> | number;
    mate1Name?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate1rollNum?: Prisma.IntNullableFilter<"Team"> | number | null;
    mate1Dept?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate2Name?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate2rollNum?: Prisma.IntNullableFilter<"Team"> | number | null;
    mate2Dept?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate3Name?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate3rollNum?: Prisma.IntNullableFilter<"Team"> | number | null;
    mate3Dept?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate4Name?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate4rollNum?: Prisma.IntNullableFilter<"Team"> | number | null;
    mate4Dept?: Prisma.StringNullableFilter<"Team"> | string | null;
    TransactionId?: Prisma.StringFilter<"Team"> | string;
    time?: Prisma.DateTimeFilter<"Team"> | Date | string;
};
export type TeamOrderByWithRelationInput = {
    teamId?: Prisma.SortOrder;
    teamName?: Prisma.SortOrder;
    leaderName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    rollNum?: Prisma.SortOrder;
    depart?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    mate1Name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate1rollNum?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate1Dept?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate2Name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate2rollNum?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate2Dept?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate3Name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate3rollNum?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate3Dept?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate4Name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate4rollNum?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate4Dept?: Prisma.SortOrderInput | Prisma.SortOrder;
    TransactionId?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
};
export type TeamWhereUniqueInput = Prisma.AtLeast<{
    teamId?: number;
    teamName?: string;
    email?: string;
    num?: number;
    TransactionId?: string;
    AND?: Prisma.TeamWhereInput | Prisma.TeamWhereInput[];
    OR?: Prisma.TeamWhereInput[];
    NOT?: Prisma.TeamWhereInput | Prisma.TeamWhereInput[];
    leaderName?: Prisma.StringFilter<"Team"> | string;
    rollNum?: Prisma.IntFilter<"Team"> | number;
    depart?: Prisma.StringFilter<"Team"> | string;
    mate1Name?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate1rollNum?: Prisma.IntNullableFilter<"Team"> | number | null;
    mate1Dept?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate2Name?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate2rollNum?: Prisma.IntNullableFilter<"Team"> | number | null;
    mate2Dept?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate3Name?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate3rollNum?: Prisma.IntNullableFilter<"Team"> | number | null;
    mate3Dept?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate4Name?: Prisma.StringNullableFilter<"Team"> | string | null;
    mate4rollNum?: Prisma.IntNullableFilter<"Team"> | number | null;
    mate4Dept?: Prisma.StringNullableFilter<"Team"> | string | null;
    time?: Prisma.DateTimeFilter<"Team"> | Date | string;
}, "teamId" | "teamName" | "email" | "num" | "TransactionId">;
export type TeamOrderByWithAggregationInput = {
    teamId?: Prisma.SortOrder;
    teamName?: Prisma.SortOrder;
    leaderName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    rollNum?: Prisma.SortOrder;
    depart?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    mate1Name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate1rollNum?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate1Dept?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate2Name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate2rollNum?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate2Dept?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate3Name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate3rollNum?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate3Dept?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate4Name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate4rollNum?: Prisma.SortOrderInput | Prisma.SortOrder;
    mate4Dept?: Prisma.SortOrderInput | Prisma.SortOrder;
    TransactionId?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    _count?: Prisma.TeamCountOrderByAggregateInput;
    _avg?: Prisma.TeamAvgOrderByAggregateInput;
    _max?: Prisma.TeamMaxOrderByAggregateInput;
    _min?: Prisma.TeamMinOrderByAggregateInput;
    _sum?: Prisma.TeamSumOrderByAggregateInput;
};
export type TeamScalarWhereWithAggregatesInput = {
    AND?: Prisma.TeamScalarWhereWithAggregatesInput | Prisma.TeamScalarWhereWithAggregatesInput[];
    OR?: Prisma.TeamScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TeamScalarWhereWithAggregatesInput | Prisma.TeamScalarWhereWithAggregatesInput[];
    teamId?: Prisma.IntWithAggregatesFilter<"Team"> | number;
    teamName?: Prisma.StringWithAggregatesFilter<"Team"> | string;
    leaderName?: Prisma.StringWithAggregatesFilter<"Team"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Team"> | string;
    rollNum?: Prisma.IntWithAggregatesFilter<"Team"> | number;
    depart?: Prisma.StringWithAggregatesFilter<"Team"> | string;
    num?: Prisma.IntWithAggregatesFilter<"Team"> | number;
    mate1Name?: Prisma.StringNullableWithAggregatesFilter<"Team"> | string | null;
    mate1rollNum?: Prisma.IntNullableWithAggregatesFilter<"Team"> | number | null;
    mate1Dept?: Prisma.StringNullableWithAggregatesFilter<"Team"> | string | null;
    mate2Name?: Prisma.StringNullableWithAggregatesFilter<"Team"> | string | null;
    mate2rollNum?: Prisma.IntNullableWithAggregatesFilter<"Team"> | number | null;
    mate2Dept?: Prisma.StringNullableWithAggregatesFilter<"Team"> | string | null;
    mate3Name?: Prisma.StringNullableWithAggregatesFilter<"Team"> | string | null;
    mate3rollNum?: Prisma.IntNullableWithAggregatesFilter<"Team"> | number | null;
    mate3Dept?: Prisma.StringNullableWithAggregatesFilter<"Team"> | string | null;
    mate4Name?: Prisma.StringNullableWithAggregatesFilter<"Team"> | string | null;
    mate4rollNum?: Prisma.IntNullableWithAggregatesFilter<"Team"> | number | null;
    mate4Dept?: Prisma.StringNullableWithAggregatesFilter<"Team"> | string | null;
    TransactionId?: Prisma.StringWithAggregatesFilter<"Team"> | string;
    time?: Prisma.DateTimeWithAggregatesFilter<"Team"> | Date | string;
};
export type TeamCreateInput = {
    teamName: string;
    leaderName: string;
    email: string;
    rollNum: number;
    depart: string;
    num: number;
    mate1Name?: string | null;
    mate1rollNum?: number | null;
    mate1Dept?: string | null;
    mate2Name?: string | null;
    mate2rollNum?: number | null;
    mate2Dept?: string | null;
    mate3Name?: string | null;
    mate3rollNum?: number | null;
    mate3Dept?: string | null;
    mate4Name?: string | null;
    mate4rollNum?: number | null;
    mate4Dept?: string | null;
    TransactionId: string;
    time?: Date | string;
};
export type TeamUncheckedCreateInput = {
    teamId?: number;
    teamName: string;
    leaderName: string;
    email: string;
    rollNum: number;
    depart: string;
    num: number;
    mate1Name?: string | null;
    mate1rollNum?: number | null;
    mate1Dept?: string | null;
    mate2Name?: string | null;
    mate2rollNum?: number | null;
    mate2Dept?: string | null;
    mate3Name?: string | null;
    mate3rollNum?: number | null;
    mate3Dept?: string | null;
    mate4Name?: string | null;
    mate4rollNum?: number | null;
    mate4Dept?: string | null;
    TransactionId: string;
    time?: Date | string;
};
export type TeamUpdateInput = {
    teamName?: Prisma.StringFieldUpdateOperationsInput | string;
    leaderName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    rollNum?: Prisma.IntFieldUpdateOperationsInput | number;
    depart?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.IntFieldUpdateOperationsInput | number;
    mate1Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate1rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate1Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate2Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate2rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate2Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate3Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate3rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate3Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate4Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate4rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate4Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TransactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeamUncheckedUpdateInput = {
    teamId?: Prisma.IntFieldUpdateOperationsInput | number;
    teamName?: Prisma.StringFieldUpdateOperationsInput | string;
    leaderName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    rollNum?: Prisma.IntFieldUpdateOperationsInput | number;
    depart?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.IntFieldUpdateOperationsInput | number;
    mate1Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate1rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate1Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate2Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate2rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate2Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate3Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate3rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate3Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate4Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate4rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate4Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TransactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeamCreateManyInput = {
    teamId?: number;
    teamName: string;
    leaderName: string;
    email: string;
    rollNum: number;
    depart: string;
    num: number;
    mate1Name?: string | null;
    mate1rollNum?: number | null;
    mate1Dept?: string | null;
    mate2Name?: string | null;
    mate2rollNum?: number | null;
    mate2Dept?: string | null;
    mate3Name?: string | null;
    mate3rollNum?: number | null;
    mate3Dept?: string | null;
    mate4Name?: string | null;
    mate4rollNum?: number | null;
    mate4Dept?: string | null;
    TransactionId: string;
    time?: Date | string;
};
export type TeamUpdateManyMutationInput = {
    teamName?: Prisma.StringFieldUpdateOperationsInput | string;
    leaderName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    rollNum?: Prisma.IntFieldUpdateOperationsInput | number;
    depart?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.IntFieldUpdateOperationsInput | number;
    mate1Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate1rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate1Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate2Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate2rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate2Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate3Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate3rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate3Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate4Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate4rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate4Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TransactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeamUncheckedUpdateManyInput = {
    teamId?: Prisma.IntFieldUpdateOperationsInput | number;
    teamName?: Prisma.StringFieldUpdateOperationsInput | string;
    leaderName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    rollNum?: Prisma.IntFieldUpdateOperationsInput | number;
    depart?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.IntFieldUpdateOperationsInput | number;
    mate1Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate1rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate1Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate2Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate2rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate2Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate3Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate3rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate3Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate4Name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mate4rollNum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mate4Dept?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TransactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeamCountOrderByAggregateInput = {
    teamId?: Prisma.SortOrder;
    teamName?: Prisma.SortOrder;
    leaderName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    rollNum?: Prisma.SortOrder;
    depart?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    mate1Name?: Prisma.SortOrder;
    mate1rollNum?: Prisma.SortOrder;
    mate1Dept?: Prisma.SortOrder;
    mate2Name?: Prisma.SortOrder;
    mate2rollNum?: Prisma.SortOrder;
    mate2Dept?: Prisma.SortOrder;
    mate3Name?: Prisma.SortOrder;
    mate3rollNum?: Prisma.SortOrder;
    mate3Dept?: Prisma.SortOrder;
    mate4Name?: Prisma.SortOrder;
    mate4rollNum?: Prisma.SortOrder;
    mate4Dept?: Prisma.SortOrder;
    TransactionId?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
};
export type TeamAvgOrderByAggregateInput = {
    teamId?: Prisma.SortOrder;
    rollNum?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    mate1rollNum?: Prisma.SortOrder;
    mate2rollNum?: Prisma.SortOrder;
    mate3rollNum?: Prisma.SortOrder;
    mate4rollNum?: Prisma.SortOrder;
};
export type TeamMaxOrderByAggregateInput = {
    teamId?: Prisma.SortOrder;
    teamName?: Prisma.SortOrder;
    leaderName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    rollNum?: Prisma.SortOrder;
    depart?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    mate1Name?: Prisma.SortOrder;
    mate1rollNum?: Prisma.SortOrder;
    mate1Dept?: Prisma.SortOrder;
    mate2Name?: Prisma.SortOrder;
    mate2rollNum?: Prisma.SortOrder;
    mate2Dept?: Prisma.SortOrder;
    mate3Name?: Prisma.SortOrder;
    mate3rollNum?: Prisma.SortOrder;
    mate3Dept?: Prisma.SortOrder;
    mate4Name?: Prisma.SortOrder;
    mate4rollNum?: Prisma.SortOrder;
    mate4Dept?: Prisma.SortOrder;
    TransactionId?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
};
export type TeamMinOrderByAggregateInput = {
    teamId?: Prisma.SortOrder;
    teamName?: Prisma.SortOrder;
    leaderName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    rollNum?: Prisma.SortOrder;
    depart?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    mate1Name?: Prisma.SortOrder;
    mate1rollNum?: Prisma.SortOrder;
    mate1Dept?: Prisma.SortOrder;
    mate2Name?: Prisma.SortOrder;
    mate2rollNum?: Prisma.SortOrder;
    mate2Dept?: Prisma.SortOrder;
    mate3Name?: Prisma.SortOrder;
    mate3rollNum?: Prisma.SortOrder;
    mate3Dept?: Prisma.SortOrder;
    mate4Name?: Prisma.SortOrder;
    mate4rollNum?: Prisma.SortOrder;
    mate4Dept?: Prisma.SortOrder;
    TransactionId?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
};
export type TeamSumOrderByAggregateInput = {
    teamId?: Prisma.SortOrder;
    rollNum?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    mate1rollNum?: Prisma.SortOrder;
    mate2rollNum?: Prisma.SortOrder;
    mate3rollNum?: Prisma.SortOrder;
    mate4rollNum?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type TeamSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    teamId?: boolean;
    teamName?: boolean;
    leaderName?: boolean;
    email?: boolean;
    rollNum?: boolean;
    depart?: boolean;
    num?: boolean;
    mate1Name?: boolean;
    mate1rollNum?: boolean;
    mate1Dept?: boolean;
    mate2Name?: boolean;
    mate2rollNum?: boolean;
    mate2Dept?: boolean;
    mate3Name?: boolean;
    mate3rollNum?: boolean;
    mate3Dept?: boolean;
    mate4Name?: boolean;
    mate4rollNum?: boolean;
    mate4Dept?: boolean;
    TransactionId?: boolean;
    time?: boolean;
}, ExtArgs["result"]["team"]>;
export type TeamSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    teamId?: boolean;
    teamName?: boolean;
    leaderName?: boolean;
    email?: boolean;
    rollNum?: boolean;
    depart?: boolean;
    num?: boolean;
    mate1Name?: boolean;
    mate1rollNum?: boolean;
    mate1Dept?: boolean;
    mate2Name?: boolean;
    mate2rollNum?: boolean;
    mate2Dept?: boolean;
    mate3Name?: boolean;
    mate3rollNum?: boolean;
    mate3Dept?: boolean;
    mate4Name?: boolean;
    mate4rollNum?: boolean;
    mate4Dept?: boolean;
    TransactionId?: boolean;
    time?: boolean;
}, ExtArgs["result"]["team"]>;
export type TeamSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    teamId?: boolean;
    teamName?: boolean;
    leaderName?: boolean;
    email?: boolean;
    rollNum?: boolean;
    depart?: boolean;
    num?: boolean;
    mate1Name?: boolean;
    mate1rollNum?: boolean;
    mate1Dept?: boolean;
    mate2Name?: boolean;
    mate2rollNum?: boolean;
    mate2Dept?: boolean;
    mate3Name?: boolean;
    mate3rollNum?: boolean;
    mate3Dept?: boolean;
    mate4Name?: boolean;
    mate4rollNum?: boolean;
    mate4Dept?: boolean;
    TransactionId?: boolean;
    time?: boolean;
}, ExtArgs["result"]["team"]>;
export type TeamSelectScalar = {
    teamId?: boolean;
    teamName?: boolean;
    leaderName?: boolean;
    email?: boolean;
    rollNum?: boolean;
    depart?: boolean;
    num?: boolean;
    mate1Name?: boolean;
    mate1rollNum?: boolean;
    mate1Dept?: boolean;
    mate2Name?: boolean;
    mate2rollNum?: boolean;
    mate2Dept?: boolean;
    mate3Name?: boolean;
    mate3rollNum?: boolean;
    mate3Dept?: boolean;
    mate4Name?: boolean;
    mate4rollNum?: boolean;
    mate4Dept?: boolean;
    TransactionId?: boolean;
    time?: boolean;
};
export type TeamOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"teamId" | "teamName" | "leaderName" | "email" | "rollNum" | "depart" | "num" | "mate1Name" | "mate1rollNum" | "mate1Dept" | "mate2Name" | "mate2rollNum" | "mate2Dept" | "mate3Name" | "mate3rollNum" | "mate3Dept" | "mate4Name" | "mate4rollNum" | "mate4Dept" | "TransactionId" | "time", ExtArgs["result"]["team"]>;
export type $TeamPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Team";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        teamId: number;
        teamName: string;
        leaderName: string;
        email: string;
        rollNum: number;
        depart: string;
        num: number;
        mate1Name: string | null;
        mate1rollNum: number | null;
        mate1Dept: string | null;
        mate2Name: string | null;
        mate2rollNum: number | null;
        mate2Dept: string | null;
        mate3Name: string | null;
        mate3rollNum: number | null;
        mate3Dept: string | null;
        mate4Name: string | null;
        mate4rollNum: number | null;
        mate4Dept: string | null;
        TransactionId: string;
        time: Date;
    }, ExtArgs["result"]["team"]>;
    composites: {};
};
export type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TeamPayload, S>;
export type TeamCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TeamCountAggregateInputType | true;
};
export interface TeamDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Team'];
        meta: {
            name: 'Team';
        };
    };
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: Prisma.SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: Prisma.SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     *
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     *
     * // Only select the `teamId`
     * const teamWithTeamIdOnly = await prisma.team.findMany({ select: { teamId: true } })
     *
     */
    findMany<T extends TeamFindManyArgs>(args?: Prisma.SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     *
     */
    create<T extends TeamCreateArgs>(args: Prisma.SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TeamCreateManyArgs>(args?: Prisma.SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Teams and only return the `teamId`
     * const teamWithTeamIdOnly = await prisma.team.createManyAndReturn({
     *   select: { teamId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     *
     */
    delete<T extends TeamDeleteArgs>(args: Prisma.SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TeamUpdateArgs>(args: Prisma.SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: Prisma.SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TeamUpdateManyArgs>(args: Prisma.SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Teams and only return the `teamId`
     * const teamWithTeamIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { teamId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: Prisma.SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(args?: Prisma.Subset<T, TeamCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TeamCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Prisma.Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>;
    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends TeamGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TeamGroupByArgs['orderBy'];
    } : {
        orderBy?: TeamGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Team model
     */
    readonly fields: TeamFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Team.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TeamClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Team model
 */
export interface TeamFieldRefs {
    readonly teamId: Prisma.FieldRef<"Team", 'Int'>;
    readonly teamName: Prisma.FieldRef<"Team", 'String'>;
    readonly leaderName: Prisma.FieldRef<"Team", 'String'>;
    readonly email: Prisma.FieldRef<"Team", 'String'>;
    readonly rollNum: Prisma.FieldRef<"Team", 'Int'>;
    readonly depart: Prisma.FieldRef<"Team", 'String'>;
    readonly num: Prisma.FieldRef<"Team", 'Int'>;
    readonly mate1Name: Prisma.FieldRef<"Team", 'String'>;
    readonly mate1rollNum: Prisma.FieldRef<"Team", 'Int'>;
    readonly mate1Dept: Prisma.FieldRef<"Team", 'String'>;
    readonly mate2Name: Prisma.FieldRef<"Team", 'String'>;
    readonly mate2rollNum: Prisma.FieldRef<"Team", 'Int'>;
    readonly mate2Dept: Prisma.FieldRef<"Team", 'String'>;
    readonly mate3Name: Prisma.FieldRef<"Team", 'String'>;
    readonly mate3rollNum: Prisma.FieldRef<"Team", 'Int'>;
    readonly mate3Dept: Prisma.FieldRef<"Team", 'String'>;
    readonly mate4Name: Prisma.FieldRef<"Team", 'String'>;
    readonly mate4rollNum: Prisma.FieldRef<"Team", 'Int'>;
    readonly mate4Dept: Prisma.FieldRef<"Team", 'String'>;
    readonly TransactionId: Prisma.FieldRef<"Team", 'String'>;
    readonly time: Prisma.FieldRef<"Team", 'DateTime'>;
}
/**
 * Team findUnique
 */
export type TeamFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: Prisma.TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where: Prisma.TeamWhereUniqueInput;
};
/**
 * Team findUniqueOrThrow
 */
export type TeamFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: Prisma.TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where: Prisma.TeamWhereUniqueInput;
};
/**
 * Team findFirst
 */
export type TeamFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: Prisma.TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where?: Prisma.TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: Prisma.TeamOrderByWithRelationInput | Prisma.TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Teams.
     */
    cursor?: Prisma.TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Teams.
     */
    distinct?: Prisma.TeamScalarFieldEnum | Prisma.TeamScalarFieldEnum[];
};
/**
 * Team findFirstOrThrow
 */
export type TeamFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: Prisma.TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where?: Prisma.TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: Prisma.TeamOrderByWithRelationInput | Prisma.TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Teams.
     */
    cursor?: Prisma.TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Teams.
     */
    distinct?: Prisma.TeamScalarFieldEnum | Prisma.TeamScalarFieldEnum[];
};
/**
 * Team findMany
 */
export type TeamFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: Prisma.TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    /**
     * Filter, which Teams to fetch.
     */
    where?: Prisma.TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: Prisma.TeamOrderByWithRelationInput | Prisma.TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Teams.
     */
    cursor?: Prisma.TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    distinct?: Prisma.TeamScalarFieldEnum | Prisma.TeamScalarFieldEnum[];
};
/**
 * Team create
 */
export type TeamCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: Prisma.TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    /**
     * The data needed to create a Team.
     */
    data: Prisma.XOR<Prisma.TeamCreateInput, Prisma.TeamUncheckedCreateInput>;
};
/**
 * Team createMany
 */
export type TeamCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: Prisma.TeamCreateManyInput | Prisma.TeamCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Team createManyAndReturn
 */
export type TeamCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: Prisma.TeamSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    /**
     * The data used to create many Teams.
     */
    data: Prisma.TeamCreateManyInput | Prisma.TeamCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Team update
 */
export type TeamUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: Prisma.TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    /**
     * The data needed to update a Team.
     */
    data: Prisma.XOR<Prisma.TeamUpdateInput, Prisma.TeamUncheckedUpdateInput>;
    /**
     * Choose, which Team to update.
     */
    where: Prisma.TeamWhereUniqueInput;
};
/**
 * Team updateMany
 */
export type TeamUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: Prisma.XOR<Prisma.TeamUpdateManyMutationInput, Prisma.TeamUncheckedUpdateManyInput>;
    /**
     * Filter which Teams to update
     */
    where?: Prisma.TeamWhereInput;
    /**
     * Limit how many Teams to update.
     */
    limit?: number;
};
/**
 * Team updateManyAndReturn
 */
export type TeamUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: Prisma.TeamSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    /**
     * The data used to update Teams.
     */
    data: Prisma.XOR<Prisma.TeamUpdateManyMutationInput, Prisma.TeamUncheckedUpdateManyInput>;
    /**
     * Filter which Teams to update
     */
    where?: Prisma.TeamWhereInput;
    /**
     * Limit how many Teams to update.
     */
    limit?: number;
};
/**
 * Team upsert
 */
export type TeamUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: Prisma.TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: Prisma.TeamWhereUniqueInput;
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: Prisma.XOR<Prisma.TeamCreateInput, Prisma.TeamUncheckedCreateInput>;
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TeamUpdateInput, Prisma.TeamUncheckedUpdateInput>;
};
/**
 * Team delete
 */
export type TeamDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: Prisma.TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    /**
     * Filter which Team to delete.
     */
    where: Prisma.TeamWhereUniqueInput;
};
/**
 * Team deleteMany
 */
export type TeamDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: Prisma.TeamWhereInput;
    /**
     * Limit how many Teams to delete.
     */
    limit?: number;
};
/**
 * Team without action
 */
export type TeamDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: Prisma.TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: Prisma.TeamOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Team.d.ts.map