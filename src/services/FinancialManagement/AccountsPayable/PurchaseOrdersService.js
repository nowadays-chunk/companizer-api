const { query } = require('../../../db');

class PurchaseOrdersService {
    async getAll(organizationId) {
        return await query('SELECT * FROM purchase_orders WHERE organization_id = ? ORDER BY created_at DESC', [organizationId]);
    }

    async getById(id, organizationId) {
        const pos = await query('SELECT * FROM purchase_orders WHERE id = ? AND organization_id = ?', [id, organizationId]);
        if (!pos.length) return null;

        const items = await query('SELECT * FROM purchase_order_items WHERE purchase_order_id = ?', [id]);
        return { ...pos[0], items };
    }

    async getByVendor(vendorId, organizationId) {
        return await query('SELECT * FROM purchase_orders WHERE vendor_id = ? AND organization_id = ? ORDER BY created_at DESC', [vendorId, organizationId]);
    }

    async create(data, organizationId) {
        const { vendor_id, po_number, order_date, total_amount, items } = data;

        const result = await query(
            'INSERT INTO purchase_orders (organization_id, vendor_id, po_number, order_date, total_amount) VALUES (?, ?, ?, ?, ?)',
            [organizationId, vendor_id, po_number, order_date, total_amount]
        );

        const poId = result.insertId;

        if (items && items.length) {
            for (const item of items) {
                await query(
                    'INSERT INTO purchase_order_items (purchase_order_id, description, quantity, unit_price, total_price, sku) VALUES (?, ?, ?, ?, ?, ?)',
                    [poId, item.description, item.quantity, item.unit_price, item.total_price, item.sku]
                );
            }
        }

        return this.getById(poId, organizationId);
    }

    async update(id, data, organizationId) {
        const { status, total_amount } = data;

        await query(
            'UPDATE purchase_orders SET status = ?, total_amount = ? WHERE id = ? AND organization_id = ?',
            [status, total_amount, id, organizationId]
        );

        return this.getById(id, organizationId);
    }

    async delete(id, organizationId) {
        return await query('DELETE FROM purchase_orders WHERE id = ? AND organization_id = ?', [id, organizationId]);
    }
}

module.exports = new PurchaseOrdersService();
