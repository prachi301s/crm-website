export const NAV_ITEMS = [
    {
        id: 1,
        menu: "crm",
        menuItem: [
            { id: "1-a", label: "new_contact", modalKey: "contact" },
            { id: "1-b", label: "delete_contact", modalKey: "deleteContact" },
            {
                id: "1-c",
                label: "mark_contact_as_non_existent",
                modalKey: "nonExistent",
            },
            // { id: "1-d", label: "contact_alert" },
            { id: "1-e", label: "schedule_a_call", modalKey: "scheduleCall" },
            {
                id: "1-f",
                label: "pass_note_to_a_colleague",
                modalKey: "passNote",
            },
        ],
    },
    {
        id: 2,
        menu: "billing",
        menuItem: [
            { id: "2-a", label: "new_order", link: "billing-new-order" },
            { id: "2-b", label: "sales_listing", link: "billing-sales-list" },
            {
                id: "2-c",
                label: "return_management",
                link: "billing-pending-return",
            },
            { id: "2-d", label: "replenishment", link: "billing-replenishment" },
        ],
    },
    {
        id: 3,
        menu: "administrator",
        menuItem: [
            { id: "3-a", label: "stock", link: "admin-stock" },
            {
                id: "3-b",
                label: "telemarketing_report",
                subMenu: [
                    {
                        id: "3b-1",
                        label: "call_system_downtime_report",
                        link: "telemarketing-call-system",
                    },
                    {
                        id: "3b-2",
                        label: "authorized_signatures_log_report",
                        link: "authorized",
                    },
                    {
                        id: "3b-3",
                        label: "pending_calls_report",
                        link: "pending-call",
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        menu: "send_whatsApp",
        menuItem: [
            { id: "4-a", label: "send_template", modalKey: "sendTemplate" },
            { id: "4-b", label: "send_message", modalKey: "sendMessage" },
            {
                id: "4-c",
                label: "sent_last_order_amount",
                modalKey: "sentLastOrderAmount",
            },
        ],
    },
];
