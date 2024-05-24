import { EntityProp } from '../types';

//https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/resources/dynamics_salesquoteline

export const salesQuoteLinesEntityProps: EntityProp[] = [
	{
		name: 'salesQuoteId',
		displayName: 'Sales Qoute ID',
		type: 'dynamic_select',
		isRequired: false,
		options: {
			sourceFieldSlug: 'salesQuotes',
			labelField: 'number',
		},
	},
	{
		name: 'lineType',
		displayName: 'Type',
		type: 'static_select',
		isRequired: false,
		options: [
			// {
			// 	label: 'Comment',
			// 	value: 'Comment',
			// },
			// {
			// 	label: 'Account',
			// 	value: 'Account',
			// },
			{
				label: 'Item',
				value: 'Item',
			},
			// {
			// 	label: 'Resource',
			// 	value: 'Resource',
			// },
			// {
			// 	label: 'Value',
			// 	value: 'Value',
			// },
			// {
			// 	label: 'Charge',
			// 	value: 'Charge',
			// },
			// {
			// 	label: 'Fixed Asset',
			// 	value: 'Fixed Asset',
			// },
		],
	},
	{
		name: 'itemId',
		displayName: 'Item ID',
		isRequired: false,
		type: 'dynamic_select',
		options: {
			sourceFieldSlug: 'items',
			labelField: 'number',
		},
	},
	{
		name: 'sequence',
		displayName: 'Sequence Number',
		isRequired: false,
		type: 'text',
	},
	{
		name: 'lineObjectNumber',
		displayName: 'Line Object Number',
		description: 'The number of the object (account or item) of the sales quote line.',
		type: 'text',
		isRequired: false,
	},
	{
		name: 'description',
		displayName: 'Description',
		type: 'text',
		isRequired: false,
	},
	{
		name: 'unitOfMeasureId',
		displayName: 'Unit of Measure ID',
		isRequired: false,
		type: 'dynamic_select',
		options: {
			sourceFieldSlug: 'unitsOfMeasure',
			labelField: 'code',
		},
	},
	{
		name: 'unitOfMeasureCode',
		displayName: 'Unit of Measure Code',
		isRequired: false,
		type: 'text',
	},
	{
		name: 'quantity',
		displayName: 'Quantity',
		isRequired: false,
		type: 'number',
	},
	{
		name: 'unitPrice',
		displayName: 'Unit Price',
		isRequired: false,
		type: 'number',
	},
	{
		name: 'discountAmount',
		displayName: 'Discount Amount',
		type: 'number',
		isRequired: false,
	},
	{
		name: 'discountPercent',
		displayName: 'Discount Percent',
		type: 'number',
		isRequired: false,
	},
	{
		name: 'taxCode',
		displayName: 'Tax Code',
		type: 'text',
		isRequired: false,
	},
];
export const salesQuoteLinesEntityNumberProps = [
	'quantity',
	'unitPrice',
	'discountPercent',
	'discountAmount',
];
