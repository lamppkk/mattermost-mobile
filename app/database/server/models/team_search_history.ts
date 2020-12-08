// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import Model, {Associations} from '@nozbe/watermelondb/Model';
import {field, json, text} from '@nozbe/watermelondb/decorators';

import {MM_TABLES} from '@constants/database';

const {TEAM, TEAM_SEARCH_HISTORY} = MM_TABLES.SERVER;

export default class TeamSearchHistory extends Model {
    static table = TEAM_SEARCH_HISTORY
    static associations: Associations = {
        [TEAM]: {type: 'belongs_to', key: 'team_id'},
    }

    @field('created_at') createdAt!: number
    @field('team_id') teamId!: number
    @json('display_term', (rawJson) => rawJson) displayTerm!: string []
    @text('term') term!: number
}