console.log('ward-map.ts loaded v1.0.0');

export function showHighlightedWardMap(categoryId: string): void {
    Xrm.Navigation.openAlertDialog({ text: 'showHighlightedWardMap called' });

    // console.log('Opening dashboard for Product Deliverable: %O', productDeliverableId);
    //
    // Xrm.Navigation.navigateTo({
    //     pageType: 'custom',
    //     name: 'ics_dashboard_1650c',
    //     entityName: 'ics_productdeliverable',
    //     recordId: productDeliverableId
    // },{
    //     target: 2
    // }).then(
    //     (msg) => {
    //         console.log('Navigated to the dashboard successfully. msg: %O', msg);
    //     },
    //     (error) => {
    //         console.error('An error occurred while trying to navigate to the dashboard. %O', error);
    //     }
    // );
}
